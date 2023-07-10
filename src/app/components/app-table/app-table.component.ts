import { Component } from '@angular/core';
import { ELEMENT_DATA, PeriodicElement } from 'src/data/data';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  data: PeriodicElement[];
  constructor() {
    this.data = ELEMENT_DATA;
  }
}
