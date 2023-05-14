import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) { }

  getArrivals(){
    return this.http  
    .get('https://opensky-network.org/api/flights/arrival?airport=EDDF&begin=1517227200&end=1517230800')
    .pipe(
      map((data:any ) => {
        return data;
      }), 
      filter((data: any) => {
        return true;  
      })
    )

  }

  
  getDepartures(){
    return this.http  
    .get('https://opensky-network.org/api/flights/departure?airport=EDDF&begin=1517227200&end=1517230800')
    .pipe(
      map((data:any ) => {
        return data;
      }), 
      filter((data: any) => {
        return true;  
      })
    )

  }
}