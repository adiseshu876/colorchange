import { Component } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent {
  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  selectedOption1 = this.options[0];
  selectedOption2 = this.options[0];
}
