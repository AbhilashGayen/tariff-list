import { Component, OnInit } from '@angular/core';
import { Tariff } from 'src/app/models/tariff.model';
import { MockdataService } from 'src/app/services/mockdata.service';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss']
})
export class TariffListComponent implements OnInit {
  plans: Tariff[] = [];

  constructor(private mockdataSvc: MockdataService) {
  }

  ngOnInit(): void {
    this.mockdataSvc.getMockdata().subscribe(response => {
      this.plans = response;
    })
  }

}
