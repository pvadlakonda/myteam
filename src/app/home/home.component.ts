import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public animateMe = false;
  public moved = false;
  constructor() { }

  ngOnInit() {
  }

  animate() {
    this.animateMe = true;
    this.moved = !this.moved;

    setTimeout(() => {
      this.animateMe = false;
    }, 1000);
  }
}
