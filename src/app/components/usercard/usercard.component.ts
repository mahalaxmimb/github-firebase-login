import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {
@Input() user:any;
  constructor() { }

  ngOnInit(): void {
  }

}
