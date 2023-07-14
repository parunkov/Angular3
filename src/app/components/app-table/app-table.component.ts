import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterService } from 'src/app/services/filter.service';
import { ELEMENT_DATA, PeriodicElement } from 'src/data/data';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  data: PeriodicElement[];
  private subscription: Subscription;
  constructor(
    private filterSevice: FilterService
  ) {
    this.data = ELEMENT_DATA;
    this.subscription = this.filterSevice.filter$.subscribe((value) => {
      console.log(value);
      this.data = ELEMENT_DATA.filter((item) => item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    })
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
