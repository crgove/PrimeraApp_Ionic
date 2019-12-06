import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mostrar: boolean = false;
  motor: boolean = false;

  constructor() {}

  mostrarOculto(): void {
    this.mostrar = !this.mostrar;
  }

  mostrarMotor(): void {
    this.motor = !this.motor;

  }

}
