import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  // parent: string = '';
  // AddParents() {
  //   if (this.parent.trim() !== '') {
  //     this.childs.push(this.parent);
  //     this.parent = '';
  //   }
  // }
  // removeParents(index: number) {
  //   this.childs.splice(index, 1);
  // }
  // childs: string[] = ['amma', 'nana', 'brother'];
  name: string = '';
  names: string[] = ['seshu', 'sai', 'man'];

  addName() {
    if (this.name.trim() !== '') {
      this.names.push(this.name);
      this.name = ''; // Clear input after adding
    }
  }

  removeName(index: number) {
    this.names.splice(index, 1);
  }
}
