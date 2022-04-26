import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-buttons',
  template: `
      <button mat-flat-button>
          <mat-icon>home</mat-icon>
            Click Me
      </button>
      <mat-checkbox>Check me!</mat-checkbox>
  `,
  styles: []
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
