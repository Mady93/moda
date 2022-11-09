import { Injectable } from '@angular/core';
import { Dress } from '../models/dress.model';
import { DRESSES } from './../mocks/dresses.mock';
import{ Observable,of } from 'rxjs'; // of  si usa con i file mock per simulare le chiamate

@Injectable({
  providedIn: 'root'
})
export class DressService {

  constructor() { }

  getRecipes(): Observable <Dress[]>{
    return of (DRESSES);
      }
    }
     // ora devo creare il componente dresses
