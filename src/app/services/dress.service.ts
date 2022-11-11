import { Injectable } from '@angular/core';
import { Dress } from '../models/dress.model';
import { DRESSES } from './../mocks/dresses.mock';
import{ Observable,of } from 'rxjs'; // of  si usa con i file mock per simulare le chiamate

@Injectable({
  providedIn: 'root'
})
export class DressService {

  constructor() { }

  getDresses(): Observable <Dress[]>{
    return of (DRESSES);
      }
      // ora devo creare il componente dresses

      //### ritorna il dettaglio in base al id -- evento
 getDress(id:number):Observable<Dress>{
  const dress = DRESSES.find(dress => dress._id === id);
  return of(dress);
    }
  }
