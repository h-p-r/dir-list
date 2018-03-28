import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { DataService } from '../data.service';

declare var firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [DataService]
})
export class DirectoryComponent implements OnInit {

  nin: string;
  ninjas = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) { 
    this.nin=route.snapshot.params['ninjaName'];
  }

  ngOnInit() {
    // this.dataService.fetchData().subscribe(
    //   (data) => this.ninjas = data as any
    // );

    // this.fbGetData();

    this.dataService.fbData().on('child_added', (snap) => {
      this.ninjas.push(snap.val())
    })
  }

  fbGetData() {
    firebase.database().ref('/').on('child_added', (snapsho) => {
      this.ninjas.push(snapsho.val())
    })
  }

  fbPostData(name, belt) {
    this.dataService.fbPostData(name, belt);
  }

}
