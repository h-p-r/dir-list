import { DirectoryComponent } from './directory/directory.component'
import { HomeComponent } from './home/home.component'
// import { Routes } from '@angular/router'

const APP_ROUTER  = [
  { path: 'directory/:ninjaName', component: DirectoryComponent },
  { path: '', component: HomeComponent }
];

export { APP_ROUTER };