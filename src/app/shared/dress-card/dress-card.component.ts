import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Dress } from 'src/app/models/dress.model';
import { DressService } from 'src/app/services/dress.service';

/*
    angular.json---impostare: line: 10
   "@schematics/angular:application": {
    "strict": true
 }

    tsconfig.json -- impostare: line 8:
    "strict": false
 */

@Component({
  selector: 'app-dress-card',
  templateUrl: './dress-card.component.html',
  styleUrls: ['./dress-card.component.scss'],
})
export class DressCardComponent implements OnInit, OnChanges {
  percorsoDifficolta = '/../../../src/assets/img/difficolta-';
  @Input() OrderByCategory: string;

  @Output() messaggio = new EventEmitter(); // variabile output che invia un nuovo evento
  @Input() pag: string;

  dressList: Dress[] = [];
  vestiti: Dress[] = [];

  constructor(private dressService: DressService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['OrderByCategory'] && changes['OrderByCategory'].currentValue != 'null') {

      this.OrderByCategory = changes['OrderByCategory'].currentValue;
      this.dressList = this.vestiti.filter(
        (res) => res.category === this.OrderByCategory);
    }else{
      this.inizzialize();
    }
  }

  ngOnInit(): void {
    this.inizzialize();
  }

  inviaTitolo(titolo: string) {
    // event (click)
    if (titolo) {
      this.messaggio.emit(titolo);
    }

  }

private inizzialize(){
  this.dressService.getDresses().subscribe({
    next: (res) => {
      this.vestiti = res;
      if (this.pag == 'home') {
        this.vestiti = this.vestiti.sort((a, b) => b._id - a._id).slice(0, 4);
      }
      this.dressList = this.vestiti;
    },
    error: (e) => {
      console.error(e);
    },
  });
}
}
