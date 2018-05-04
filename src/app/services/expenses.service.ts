import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expenses } from '../models/expenses.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExpensesService {
  private url = 'https://api.mlab.com/api/1/databases/hydboyz/collections/expenses?apiKey=2-byIVNo-oqo6Irfu3ywY1OkJW8GY_xh';

  constructor(private http: HttpClient) { }

  getExpenses(): Observable<Expenses[]> {
    return this.http.get<Expenses[]>(this.url);
  }
}
