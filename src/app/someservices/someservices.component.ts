import { HttpClient } from '@angular/common/http';
import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-someservices',
  templateUrl: './someservices.component.html',
  styleUrls: ['./someservices.component.css']
})
export class SomeservicesComponent {
  // currentPath: string;
  responseData: any;
  counter: number;

  constructor(private location: Location, private http: HttpClient, private zone: NgZone, private someservice: SomeservicesComponent) {
    // this.currentPath = this.location;
    this.counter = someservice.getCount();
  }
  getCount(): number {
    throw new Error('Method not implemented.');
  }

  getData() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe(data => {
        this.responseData = data;
      });
  }

  increment() {
    this.someservice.increment();
    this.counter = this.someservice.getCount();
  }

  decrement() {
    this.someservice.decrement();
    this.counter = this.someservice.getCount();
  }
}
