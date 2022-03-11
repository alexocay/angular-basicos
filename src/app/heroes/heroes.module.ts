import { CommonModule } from '@angular/common'
import {NgModule} from '@angular/core'
import { RouterModule } from '@angular/router'
import { HeroeComponent } from './heroe/heroe.component'
import { ListadoComponent } from './listado/listado.component'

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        RouterModule,
        CommonModule
    ]
})

export class HeroesModule{

}