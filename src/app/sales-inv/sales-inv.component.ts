import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-inv',
  templateUrl: './sales-inv.component.html',
  styleUrls: ['./sales-inv.component.css']
})
export class SalesInvComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
