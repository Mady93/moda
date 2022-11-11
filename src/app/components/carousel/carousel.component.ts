import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images = [
    {
    id: 1,
    label: 'We'
    },
    {
    id: 2,
    label: 'love'
    },
    {
    id: 3,
    label: 'fashion'
    }
  ];

percorso ='../../../assets/img/moda-';

  constructor() { }

  ngOnInit(): void {
  }

}

