import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  number1: number = 0; // Initialize number1 with a default value
  number2: number = 0;
  operation: string = 'add';
  result: number | null = null; // Initialize result with a default value

  compute() {
    if (this.operation === 'add') {
      this.result = this.number1 + this.number2;
    } else if (this.operation === 'subtract') {
      this.result = this.number1 - this.number2;
    } else if (this.operation === 'multiply') {
      this.result = this.number1 * this.number2;
    }
  }
}
