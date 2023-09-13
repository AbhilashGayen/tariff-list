import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Tariff } from 'src/app/models/tariff.model';
import { MockdataService } from 'src/app/services/mockdata.service';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss']
})
export class TariffListComponent implements OnInit {
  plans: Tariff[] = [];

  sortForm = this.fromBuilder.nonNullable.group({
    sortField: 'name',
    sortOrder: 'asc'
  })

  get sortParams(): SortParams {
    const { sortField, sortOrder } = this.sortForm.getRawValue();
    return { sortField, sortOrder } as SortParams;
  }

  constructor(private mockdataSvc: MockdataService, private fromBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.mockdataSvc.getMockdata().subscribe(response => {
      this.plans = response;
    })
  }

  sortBy(sortField: SortColumns) {
    const isCurrentField = sortField === this.sortParams.sortField;
    const sortOrder = isCurrentField
      ? this.sortParams.sortOrder === 'asc' ? 'desc' : 'asc'
      : 'asc';

    this.sortForm.patchValue({ sortField, sortOrder })
  }
}


export interface SortParams {
  sortField: SortColumns;
  sortOrder: SortOrder;
}

type SortColumns = 'name' | 'uploadSpeed' | 'downloadSpeed' | 'cost' | 'benefits';
type SortOrder = 'asc' | 'desc'
