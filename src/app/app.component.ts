import { Component } from '@angular/core';
import { faHand } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faHouzz } from '@fortawesome/free-brands-svg-icons';
import{ faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Digital-Fashion'
  iconaHome = faHouzz;
  iconaAbbigliamento = faHand;
  iconaMail = faPhone;
  iconaRegistered = faCircleUser;
  //iconaRicerca = faFaceLaughWink;
  iconaRicerca = faSearch;
/*
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  percorso ='../assets/img/moda-';
  */
  //percorso2 = '../assets/img/carousel-1.jpg';

}
//New Collection
  //Fall-Winter Collection 2022/2023
