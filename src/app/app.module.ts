import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DressesComponent } from './components/dresses/dresses.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarouselTextComponent } from './components/carousel-text/carousel-text.component';
import { DressCardComponent } from './shared/dress-card/dress-card.component';
import { DetailComponent } from './components/dresses/detail/detail.component';
import { DressesListComponent } from './components/dresses/dresses-list/dresses-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    DressesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CarouselTextComponent,
    DressCardComponent,
    DetailComponent,
    DressesListComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
