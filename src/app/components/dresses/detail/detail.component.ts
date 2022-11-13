import { Component, OnInit } from '@angular/core';
//####### router gestisce le rotte dalla classe
import { ActivatedRoute, Router } from '@angular/router';
import { Dress } from 'src/app/models/dress.model';
import {DressService } from 'src/app/services/dress.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  prodotto: Dress;
  constructor(
    private dressService: DressService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onGetDress2();
  }

  //#### metodo che fa la stessa cosa del metodo sotto
  onGetDress(): void {
    //#### prendo l'id della routedeActived tramite snapshotParam, lo converto in numero
    //_id deve combacciare con path app-routing.module.ts
    const ID = Number(this.activatedRoute.snapshot.paramMap.get('_id'));
    this.dressService.getDress(ID).subscribe({
      next: (res) => {
        this.prodotto = res;
        console.log(this.prodotto);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  //#### meglio usare il 2 metodo
  onGetDress2():void{
    // recipeService è incluso nell'activatedRoute
    this.activatedRoute.params.subscribe((urlParams)=>{
      //uso params quando devo reccuperare piu parametri
      const ID = urlParams['_id'];
      const idN = Number(ID);
      if(idN){
      this.dressService.getDress(idN).subscribe(res => this.prodotto = res);
  }
});
  }

}
