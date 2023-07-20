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
  sortingDown = true;
  selectedColumn = '';
  // filterData = '';
  private subscription: Subscription;
  constructor(
    private filterSevice: FilterService
  ) {
    this.data = ELEMENT_DATA;
    this.subscription = this.filterSevice.filter$.subscribe((value) => {
      // this.filterData = value;
      this.data = ELEMENT_DATA.filter((item) => item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    })
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onClick(event: Event) {
    if (this.selectedColumn === (event.target as Element).id) this.sortingDown = !this.sortingDown;
    console.log(this.sortingDown);
    
    this.selectedColumn = (event.target as Element).id;
    const sortData = (id: string) => {
      if (this.sortingDown) {
        this.data = this.data.sort((first: any, second: any) => second[id] - first[id]);
      } else {
        this.data = this.data.sort((first: any, second: any) => first[id] - second[id]);
      }
    }
    sortData(this.selectedColumn);
    this.filterSevice.changeFilter(this.filterData);
    // if (this.sortingDown && )
  }
}
