import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template: `
  // <ul>
  //   <li *ngFor="let item of items | async">
  //     <input type="text" #updatetext [value]="item.text" />
  //     <button (click)="updateItem(item.$key, updatetext.value)">Update</button>
  //     <button (click)="deleteItem(item.$key)">Delete</button>
  //   </li>
  // </ul>
  // <input type="text" #newitem />
  // <button (click)="addItem(newitem.value)">Add</button>
  // <button (click)="deleteEverything()">Delete All</button>
  // `,
})
export class AppComponent {
  items: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/messages');
  }
  addItem(newName: string) {
    this.items.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.items.update(key, { text: newText });
  }
  deleteItem(key: string) {
    this.items.remove(key);
  }
  deleteEverything() {
    this.items.remove();
  }
}
