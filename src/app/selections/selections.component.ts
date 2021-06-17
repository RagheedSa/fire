import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selections',
  templateUrl: './selections.component.html',
  styleUrls: ['./selections.component.css']
})
export class SelectionsComponent implements OnInit {
  title = 'cards';

  step = 0;
  
  setStep(index: number) {
    this.step = index;
  }
  
  nextStep() {
    this.step++;
  }
  
  prevStep() {
    this.step--;
  }
  members: {title: string, subtitle: string, url: string}[] = [
    {title: 'Genral Setup', subtitle: 'Subtitle',  url: 'assets/Logo (1).jpg'},
    {title: 'Top management Reports', subtitle: 'Subtitle',  url: 'assets/Logo (1).jpg'},
    {title: 'Genral Ledger', subtitle: 'Subtitle',  url: 'assets/Logo (1).jpg'},
    {title: 'Fixed Assest', subtitle: 'Subtitle',  url: 'assets/Logo (1).jpg'},
    {title: 'Contract System', subtitle: 'Subtitle',  url: 'assets/Logo (1).jpg'},
    {title: 'Miscellaneous Expenses and Income', subtitle: 'Subtitle',  url: 'assets/Logo (1).jpg'},
    {title: 'Stock Control , Sales and Purchase', subtitle: 'Subtitle',  url: 'assets/Logo (1).jpg'},
    {title: 'Promotions', subtitle: 'Subtitle',  url: 'assets/Logo (1).jpg'},
    {title: 'Importation', subtitle: 'Subtitle',  url: 'assets/Logo (1).jpg'},
    {title: 'Physical Inventory Machine', subtitle: 'Subtitle',  url: 'assets/Logo (1).jpg'},
    {title: 'Human Resources and payroll', subtitle: 'Subtitle',  url: 'assets/Logo (1).jpg'},
    {title: 'Time Attendance', subtitle: 'Subtitle',  url: 'assets/Logo (1).jpg'},
    {title: 'Contact Index', subtitle: 'Subtitle',  url: 'assets/Logo (1).jpg'},
    {title: 'Human Resources and Payroll2', subtitle: 'Subtitle',  url: 'assets/Logo (1).jpg'},
    {title: 'Data Transfer', subtitle: 'Subtitle',  url: 'assets/Logo (1).jpg'},
     ];


  constructor() { }

  ngOnInit(): void {
  }

}
