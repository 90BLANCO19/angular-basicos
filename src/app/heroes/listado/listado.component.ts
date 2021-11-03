import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

 heroes: string[] = ['Superman', 'Batman', 'Flash','Mujer Maravilla']

 heroeBorrado2: string='';

 borrarHeroe() { //metodo borrar heroe
  this.heroeBorrado2  = this.heroes.shift() || '';
 }

}
