import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-success',
    templateUrl: 'success.component.html'
})
export class SuccessComponent  {
  userName :string

  constructor() {
    this.userName = "tejas";
  }


}
