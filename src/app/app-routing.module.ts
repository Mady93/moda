import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DressesComponent } from './components/dresses/dresses.component';

const routes: Routes = [
  {path:'',redirectTo: 'home',pathMatch:'full'},
  {path: 'home',component: HomeComponent},
  {path: 'abbigliamento',component: DressesComponent},
  //{path: '**',nomeComponente404}
  {path: '**',redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
