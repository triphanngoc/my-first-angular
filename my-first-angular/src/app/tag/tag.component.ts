import { Component, OnInit } from '@angular/core';
import { TAGS } from 'src/db-data';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'my-first-angular';

  tagTime = TAGS[0];
  tagPosition = TAGS[2];
  tagStatus = TAGS[3];  
  
}
