import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Mark this as a standalone component
  imports: [CalculatorComponent],  // Import the CalculatorComponent here
})
export class AppComponent {
  title = 'calculator-app';
}
