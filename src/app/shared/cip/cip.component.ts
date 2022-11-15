import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cip',
  templateUrl: './cip.component.html',
  styleUrls: ['./cip.component.scss']
})
export class CipComponent implements OnInit {

  @Input() cat:string;

  constructor() { }

  ngOnInit(): void {
  }


}
