import { Component, OnInit } from '@angular/core';
import { faHand } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faHouzz } from '@fortawesome/free-brands-svg-icons';
import{ faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  iconaHome = faHouzz;
  iconaAbbigliamento = faHand;
  iconaMail = faPhone;
  iconaRegistered = faCircleUser;
  iconaRicerca = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
