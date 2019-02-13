import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Heroe } from '../interfaces/heroe.interface';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroe-edit',
  templateUrl: './heroe-edit.component.html',
  styles: []
})
export class HeroeEditComponent implements OnInit {

  heroe:Heroe ={
    nombre:"",
    bio:"",
    casa:"Marvel",
    key$:""

  };

  constructor( private _heroeService:HeroesService ) { 
    console.log(this.heroe);

   }

  ngOnInit() {
  }


  guardar(){
    console.log(this.heroe);
    
    
    this._heroeService.nuevoHeroe(this.heroe)
          .subscribe( data=>{  console.log(data) } )

  }


}
