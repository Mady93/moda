import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faHand } from '@fortawesome/free-regular-svg-icons';
import { faChain,  faPersonDressBurst, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { faHouzz} from '@fortawesome/free-brands-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Category_Models } from './../../models/category_model';
import { CATEGORY_MOCKS } from './../../mocks/category_mocks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  iconaHome = faHouzz;
  iconaAbbigliamento = faHand;
  iconaMail = faPhone;
  iconaRegistered = faCircleUser;
  iconaRicerca = faSearch;
  iconaCategoria = faChain;
  iconaFilter = faPersonDressBurst;

  private categryList: Category_Models[] = CATEGORY_MOCKS;
  public categoryNameList: string[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.categryList);
    this.getSortFilterName_category();
  }

  public navigate(category: string) {
    let url: string = 'abbigliamento/' + category;
    this.router.navigate([url]);
  }

  getSortFilterName_category() {
    let categorySetList: Set<string> = new Set();
    this.categryList.forEach((res) => {
      categorySetList.add(res.name);
    });
    this.categoryNameList = Array.from(categorySetList); //parsing set in arrayList
  }
}
