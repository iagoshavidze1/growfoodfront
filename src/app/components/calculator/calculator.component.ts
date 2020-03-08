import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  weight: number;
  age: number;
  height: number;
  gender: number;
  activeType: number;

  constructor() {
    this.gender = 0;
    this.activeType = 0;
  }

  ngOnInit() {
  }

  calculate() {
    debugger;
    var w = this.weight;

  }
}
