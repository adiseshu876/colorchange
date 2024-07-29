import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  // colorValue: string = '';
  // expression: string = '';
  // evaluatedExpression: any = '';

  // changeColor() {
  //   console.log('changeColor function called');
  //   const textBox = document.getElementById('textBox');
  //   console.log('textBox element:', textBox);
  //   if (textBox) {
  //     textBox.style.backgroundColor = this.colorValue;
  //   } else {
  //     console.error('Element with id "textBox" not found.');
  //   }
  // }
  color: string = '';

  getBackgroundColor() {
    return this.color || 'green';
  }
  // evaluateExpression() {
  //   // Implement your expression evaluation logic here if needed
  //   this.evaluatedExpression = this.expression; // Example: simple assignment
  // }
}
