import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var firebase: any;

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http.get('https://angular-dir-list.firebaseio.com/.json');
  }

  fbData() {
    return firebase.database().ref('/');
  }

  fbPostData(name, belt) {
    firebase.database().ref('/').push( {name: name, belt: belt} );
  }

}
