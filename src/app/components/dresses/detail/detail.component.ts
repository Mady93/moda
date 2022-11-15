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

  percorsoQualita = "../../../../assets/img/qualita-";


  vestito: Dress;
  constructor(
    private dressService: DressService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onGetDress2();
  }



  onGetDress(): void {
    const ID = Number(this.activatedRoute.snapshot.paramMap.get('_id'));
    this.dressService.getDress(ID).subscribe({
      next: (res) => {
        this.vestito = res;
        console.log(this.vestito);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }




  //#### meglio usare il 2 metodo
  onGetDress2():void{
    this.activatedRoute.params.subscribe((urlParams)=>{
      const ID = urlParams['_id'];
      const idN = Number(ID);
      if(idN){
      this.dressService.getDress(idN).subscribe(res => this.vestito = res);
  }
});
  }

}
