import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  standalone: true,
  imports: [FormsModule]  // Add FormsModule here
})
export class CalculatorComponent {
  display: string = '';

  appendCharacter(char: string) {
    this.display += char;
  }

  clear() {
    this.display = '';
  }

  delete() {
    this.display = this.display.slice(0, -1);
  }

  calculate() {
    try {
      this.display = this.evaluateExpression(this.display);
    } catch (error) {
      this.display = 'Error';
    }
  }

  evaluateExpression(expression: string): string {
    return new Function('return ' + expression)().toString();
  }
}
