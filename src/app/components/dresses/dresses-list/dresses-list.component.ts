import { Category_Models } from './../../../models/category_model';
import { CATEGORY_MOCKS } from './../../../mocks/category_mocks';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dresses-list',
  templateUrl: './dresses-list.component.html',
  styleUrls: ['./dresses-list.component.scss'],
})
export class DressesListComponent implements OnInit {
  private categryList: Category_Models[] = CATEGORY_MOCKS;

  public categoryNameList: string[];
  titoloRicevuto: string;
  public OrderByCategory: string;

  items: MenuItem[];

  constructor() {}

  ngOnInit(): void {
      console.log(this.categryList);
      this.getSortFilterName_category();
  }

  //////////////////DA SAPPERE ///////////////////////////////

  // metodo del padre per ricevere l'output del figlio recipe-card.component.ts
  riceviTitolo(e: any) {
    if (this.titoloRicevuto && this.titoloRicevuto === e) {
      this.titoloRicevuto = '';
    } else {
      this.titoloRicevuto = e;
    }
  }

  getSortFilterName_category() {
    let categorySetList: Set<string> = new Set();
    this.categryList.forEach((res) => {
      categorySetList.add(res.name);
    });
    console.log(categorySetList);
    this.categoryNameList = Array.from(categorySetList); //parsing set in arrayList
  }

  public orderBy(category: string) {
    this.OrderByCategory = category;
  }
}
