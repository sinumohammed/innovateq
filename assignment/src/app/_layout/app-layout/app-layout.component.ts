import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  columns: number = 6;
  columnspan: number = 5;
  spanWidth: number = 1;

  constructor() {
  }

  ngOnInit(): void {
    this.onBoxResize();
  }

  onBoxResize() {
    if (window.innerWidth <= 959) {
      this.columns = 6
      this.columnspan = 6
      this.spanWidth = 0
    }
    else {
      this.columns = 6
      this.columnspan = 5
      this.spanWidth = 1
    }
  }

}
