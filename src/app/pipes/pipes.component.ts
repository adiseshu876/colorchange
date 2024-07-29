import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  today: Date = new Date();
  text: string = 'Angular Pipes Example';
  number: number = 12345.6789;
  longText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
}
