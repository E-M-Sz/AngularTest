import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class DataService {
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

// @Injectable()
// export class DataService {
//   constructor(){}
//
//     cars = [
//       'Ford','Chevrolet','Buick'
//     ];
//
//     myData() {
//       return 'This is my data, man!';
//   }
// }
