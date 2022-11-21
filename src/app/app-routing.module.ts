import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/dresses/detail/detail.component';
import { DressesListComponent } from './components/dresses/dresses-list/dresses-list.component';
import { RegistratiComponent } from './user/registrati/registrati.component';
import { SearchComponent } from './search/search/search.component';


const routes: Routes = [
  {path:'',redirectTo: 'home',pathMatch:'full'},
  {path: 'home',component: HomeComponent},
   {path: 'abbigliamento/:category',component: DressesListComponent},
   {path: 'abbigliamento/dettaglio/:title/:_id', component: DetailComponent},
   {path: 'search',component:SearchComponent},

  //{path: '**',nomeComponente404}

  {path: 'registrati',component:RegistratiComponent},
  {path: '**',redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
