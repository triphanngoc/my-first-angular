import { Component } from '@angular/core';
import {TAGS} from '../db-data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular';
  tagTime = TAGS[0];
  tagPosition = TAGS[2];
  tagStatus = TAGS[3];
}
