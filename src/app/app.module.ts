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
import { CipComponent } from './shared/cip/cip.component';
import { RegistratiComponent } from './user/registrati/registrati.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{PasswordModule} from "primeng/password";
import{DividerModule} from "primeng/divider";
import{BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SearchComponent } from './search/search/search.component';




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
    DressesListComponent,
    CipComponent,
    RegistratiComponent,
    SearchComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DividerModule,
    PasswordModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
