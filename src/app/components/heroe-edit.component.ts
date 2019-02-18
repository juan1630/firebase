import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
//import { Heroe } from '../interfaces/heroe.interface';
import { HeroesService } from '../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe-edit',
  templateUrl: './heroe-edit.component.html',
  styles: []
})
export class HeroeEditComponent implements OnInit {

  private heroe:any ={
    nombre:"",
    bio:"",
    casa:""

  };

  nuevo:boolean = false;
  id:string;

  constructor( private _heroeService:HeroesService, 
                private router:Router, 
                private activatedRoute: ActivatedRoute
                 ) { 


    this.activatedRoute.params
          .subscribe( data=>{ 
          console.log(data)
          this.id=data['id'];

          if( this.id !== "nuevo" ){

            this._heroeService.getHeroe(this.id)
              .subscribe( data =>  { 
                console.log(data);
               return this.heroe=data;

              } );
          }
         })
   }

  ngOnInit() {
  }


  guardar(){
    console.log(this.heroe);

    if( this.id == "nuevo" ){
    
      this._heroeService.nuevoHeroe(this.heroe)
          .subscribe( data =>{  
            console.log(data);
            this.router.navigate(['/heroe', data['id']])
           }, error => { console.error(error) } );

    }else{
      this._heroeService.actualizarHero( this.heroe, this.id )
        .subscribe( data=>{ 
          console.log(data);

         }, error => { console.error(error) })
    }
    
  }

  agregarNuevo( forma:NgForm ){

    this.router.navigate(['/heroe', 'nuevo']);
    //url para navegacion
    forma.reset({
      casa:"Marvel"
    })

  }


}
