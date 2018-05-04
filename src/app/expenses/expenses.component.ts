import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material';
import { ExpensesService } from '../services/expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  displayedColumns = ['name', 'amount', 'season', 'date', 'description'];
  constructor(private expenseService: ExpensesService) { }

  ngOnInit() {
    this.expenseService.getExpenses().subscribe(results => {
      console.log(results);
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

}
