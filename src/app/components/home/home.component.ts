import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  evidenziato = false;
  constructor() { }

  ngOnInit(): void {
  }

  onEvidenziazione(){
    this.evidenziato = !this.evidenziato;
  }
}
