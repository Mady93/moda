import { ActivatedRoute } from '@angular/router';

import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dresses-list',
  templateUrl: './dresses-list.component.html',
  styleUrls: ['./dresses-list.component.scss'],
})
export class DressesListComponent implements OnInit {
  titoloRicevuto: string;
  public OrderByCategory: string;

  constructor(private activatedRoute: ActivatedRoute) {}


  ngOnInit(): void {
  this.activatedRoute.params.subscribe(
    res=>{
this.OrderByCategory=res['category'];
    }
  )
  }


  // metodo del padre per ricevere l'output del figlio recipe-card.component.ts
  riceviTitolo(e: any) {
    if (this.titoloRicevuto && this.titoloRicevuto === e) {
      this.titoloRicevuto = '';
    } else {
      this.titoloRicevuto = e;
    }
  }

  public orderBy(category: string) {
    this.OrderByCategory = category;
  }
}
