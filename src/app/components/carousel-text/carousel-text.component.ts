import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-text',
  templateUrl: './carousel-text.component.html',
  styleUrls: ['./carousel-text.component.scss']
})
export class CarouselTextComponent implements OnInit {
  textArr = [
    {
    id: 1,
    txt: 'New Collection'
    },
    {
    id: 2,
    txt: 'Spring Summer Winter'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
