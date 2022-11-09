import { Component, OnInit } from '@angular/core';
//importare solo il modello ed il service, mentre il mock no
import { Dress } from 'src/app/models/dress.model';
import { DressService } from 'src/app/services/dress.service';

@Component({
  selector: 'app-dresses',
  templateUrl: './dresses.component.html',
  styleUrls: ['./dresses.component.scss']
})
export class DressesComponent implements OnInit {
  abbigliamento:Dress[] = [];

  constructor(private dressService: DressService) { }

  ngOnInit(): void {
    this.dressService.getRecipes().subscribe({
      next:(res)=>{
        this.abbigliamento = res;
      },
      error:(e)=>{
        console.error(e);
      }
    })
  }
}
