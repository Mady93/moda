import { Component, OnInit ,  Input} from '@angular/core';
import {Dress} from 'src/app/models/dress.model'
@Component({
  selector: 'app-dress-card',
  templateUrl: './dress-card.component.html',
  styleUrls: ['./dress-card.component.scss']
})
export class DressCardComponent implements OnInit {

  @Input() dresses: Dress[];
  constructor() { }

  ngOnInit(): void {
  }
}

 /*
    angular.json---impostare: line: 10
   "@schematics/angular:application": {
    "strict": true
 }

    tsconfig.json -- impostare: line 8:
    "strict": false
 */
