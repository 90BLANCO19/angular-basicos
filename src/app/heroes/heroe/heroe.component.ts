import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

    nombre: string = 'SuperMan';
    edad: number = 31

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }


    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void{
        console.log('Hola...');

        this.nombre = 'Batman';
    }

    cambiarEdad(): void{
        console.log('Hola...');
        this.edad = 42;
    }
}
