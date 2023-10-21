import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class TarefaListaComponent {
  toDoItems: string[] = [];

  addItem(item: string) {
     this.toDoItems.push(item);
  }

  removeItem(index: number) {
     this.toDoItems.splice(index, 1);
  }
 }
