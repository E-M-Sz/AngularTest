import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { DataService } from '../../providers/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  // template: `
  //
  // <p>{{ someProperty }}</p>
  //
  // `
})
export class PostsComponent implements OnInit {

  constructor(private dataService: DataService) {}
  // someProperty:string = '';
    messages:FirebaseListObservable<any>;

  ngOnInit() {
    // console.log(this.dataService.cars);
    //
    // this.someProperty = this.dataService.myData();
    this.messages = this.dataService.items;
  }

}
