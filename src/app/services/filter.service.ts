import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public filter$ = new Subject<string>();
  public changeFilter(value: string) {
    this.filter$.next(value);
  }

  constructor() { }
}
