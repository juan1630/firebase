import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeEditComponent } from './components/heroe-edit.component';


const appRoute: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path:'heroe/:id', component:HeroeEditComponent },
    { path: '**', pathMatch:'full', redirectTo:'heroes'  }
];

export const app_routing = RouterModule.forRoot( appRoute );
