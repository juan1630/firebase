import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes;
  loading:boolean=true;


  constructor( private _heroesService:HeroesService ) { 
    //  this._heroesService.getHeroes()
    this._heroesService.getHeroes()  
    .subscribe( data=> {
        console.log(data);
        this.heroes = data;
        //this.loading=false;
        setTimeout( ()=> { this.loading = false }, 3000 )
      } )
  }

  ngOnInit() {
  }


  eliminar( key$:string ){
   this._heroesService.borrarHeroe(key$)
   .subscribe( respuesta=>{

     if(respuesta){
       console.error(respuesta);

     }else{

      delete this.heroes[key$];


     }
    } ) 
  }

}
