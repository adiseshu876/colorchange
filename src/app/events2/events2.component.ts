import { Component } from '@angular/core';

@Component({
  selector: 'app-events2',
  templateUrl: './events2.component.html',
  styleUrls: ['./events2.component.css']
})
export class Events2Component {
  eventLogs: string[] = [];

  handleClick(event: MouseEvent) {
    const logMessage = `Button clicked at: (${event.clientX}, ${event.clientY})`;
    this.eventLogs.push(logMessage);
  }

  handleMouseMove(event: MouseEvent) {
    const logMessage = `Mouse moved at: (${event.clientX}, ${event.clientY})`;
    this.eventLogs.push(logMessage);
  }
}
