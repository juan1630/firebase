
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroeUrl:string ="https://heroesapp-2bce6.firebaseio.com/Heroes.json";
  heroeURL:string="https://heroesapp-2bce6.firebaseio.com/Heroes/"

  constructor( private http:HttpClient ) { 

   }

  nuevoHeroe(heroe:Heroe){
   let body = JSON.stringify(heroe);
   let headers = new HttpHeaders({
     'Content-Type':'application/json'
   });

   return this.http.post(this.heroeUrl, body, {headers:headers}).pipe( map( res => {
     console.log(res);
     return res;
   } ))

  }

  actualizarHero( heroe:Heroe, key$:string ){
    let body = JSON.stringify(heroe);
    let url =`${ this.heroeURL }/${key$}.json`;
    let headers = new HttpHeaders( { 
      'Contentt-Type':'application/json'
     } )

     return this.http.put(url, body, { headers } ).pipe( map( res=>{ 
       console.log(res);
       return res;
      } ) )
  }

  getHeroe( key$:any ){
    let url = `${this.heroeURL }/${ key$ }.json`;

    return this.http.get( url )
      .pipe( map( res=>{ 
        return res; } ) )

  }

  getHeroes( ){
    return this.http.get(this.heroeUrl)
      .pipe( map( res=>{ 
         return res;  
        }))

  }

  borrarHeroe( key$:string ){
    let url=`${this.heroeURL}/${ key$ }.json `;
    return this.http.delete(url)
      .pipe( map(res=>{ res }))
  }

} 