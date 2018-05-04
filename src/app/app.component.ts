import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public loggedIn;
  constructor(public dialog: MatDialog) {
    this.loggedIn = false;
  }

  ngOnInit(): void {
  }

  login() {
    let dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed');
      this.loggedIn = true;
    });
  }

  logout() {
    this.loggedIn = false;
  }
}