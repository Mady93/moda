import { DressCardComponent } from './shared/dress-card/dress-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DressesComponent } from './components/dresses/dresses.component';
import { DetailComponent } from './components/dresses/detail/detail.component';
import { DressesListComponent } from './components/dresses/dresses-list/dresses-list.component';
import { RegistratiComponent } from './user/registrati/registrati.component';



const routes: Routes = [
  {path:'',redirectTo: 'home',pathMatch:'full'},
  {path: 'home',component: HomeComponent},
  {path: 'abbigliamento',component: DressesComponent,children:[
    {path: 'dettaglio/:title/:_id', component: DetailComponent},
    {path:'', pathMatch: 'full', component: DressesListComponent}
  ]},


  //{path: '**',nomeComponente404}

  /*{path: 'categoria',component:CategoryComponent, children:[
    {path: 'dettaglio/:category/:_id', component: DressCardComponent},
  ]},*/

  {path: 'registrati',component:RegistratiComponent},
  {path: '**',redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
