
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs'
import 'rxjs/Rx'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroeUrl:string ="https://heroesapp-2bce6.firebaseio.com/Heroes.json"

  constructor( private http:HttpClient ) { 

   }

  nuevoHeroe(heroe:Heroe){
   let body = JSON.stringify(heroe);
   let headers = new HttpHeaders({
     'Content-Type':'application/json'
   });

   return this.http.post(this.heroeUrl, body, { headers })
          .map( res => { 
                   console.log(res.json())
                   return res.json();
        })   
  }

} 