import { Pipe, PipeTransform } from '@angular/core';
import { Tariff } from '../models/tariff.model';
import { SortParams } from '../components/tariff-list/tariff-list.component';

@Pipe({
  name: 'sortPlans'
})
export class SortPlansPipe implements PipeTransform {

  transform(plans: Tariff[], params: SortParams): Tariff[] {
    const { sortField, sortOrder } = params;

    if (!plans || !sortField || !sortOrder) {
      return plans;
    }

    const sortedPlans = plans.sort((a, b) => {
      switch (sortField) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'uploadSpeed':
          return a.speeds.upload - b.speeds.upload;
        case 'downloadSpeed':
          return a.speeds.download - b.speeds.download;
        case 'benefits':
          return a.benefits.length - b.benefits.length;
        case 'cost':
          return a.cost - b.cost;
        default:
          return 0;
      }
    });

    return sortOrder === 'asc' ? sortedPlans : sortedPlans.reverse();
  }

}
