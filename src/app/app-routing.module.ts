import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeContentComponent } from './components/poke-content/poke-content.component';

const routes:Routes=[
    {
        path:'',
        component:PokeCardComponent,
        pathMatch:'full'
    },
    {
      path:'pokemon/:name',
      component:PokeContentComponent
    },
    {
        path:'**',
        redirectTo:''
    }
]


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ],
})

export class appRoutingModule{}