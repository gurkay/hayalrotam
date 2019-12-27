import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 

  lat: number = 39.925533; lng : number = 32.866287;
  constructor() { }

  ngOnInit() {
  }

}
