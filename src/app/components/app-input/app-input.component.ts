import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FilterService } from 'src/app/services/filter.service';


@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
})
export class AppInputComponent {
  value = '';
  onInput(event: Event) {
    this.filterService.changeFilter(this.value);
  }
  constructor(
    private filterService: FilterService
  ) { }
}
