import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Capitan America', 'Spiderman', 'Iron Man', 'Hulk', 'Thor', 'Black Widow'];
  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift()||'';
    console.log(this.heroeBorrado);
  }

  //Con cualquier funcion se debe borrar algo de el arreglo que solo se borreo uno e los elementos y ver si es renderizado de nuevo 
}
