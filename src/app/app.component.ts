import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  contundentes = 10;

  habilidades: Habilidad[] = [
    {
      gradoMaximo: 2,
      grado: 0,
      habilidad: 'Sin Armadura'
    }, {
      gradoMaximo: 3,
      grado: 0,
      habilidad: 'Cuero'
    }, {
      gradoMaximo: 20,
      grado: 0,
      habilidad: 'Contundentes'
    }, {
      gradoMaximo: 20,
      grado: 0,
      habilidad: 'Contundentes'
    }, {
      gradoMaximo: 20,
      grado: 0,
      habilidad: 'Contundentes'
    }, {
      gradoMaximo: 20,
      grado: 0,
      habilidad: 'Contundentes'
    }, {
      gradoMaximo: 20,
      grado: 0,
      habilidad: 'Contundentes'
    }, {
      gradoMaximo: 20,
      grado: 0,
      habilidad: 'Contundentes'
    }, {
      gradoMaximo: 20,
      grado: 0,
      habilidad: 'Contundentes'
    }, {
      gradoMaximo: 20,
      grado: 0,
      habilidad: 'Contundentes'
    }, {
      gradoMaximo: 20,
      grado: 0,
      habilidad: 'Contundentes'
    }, {
      gradoMaximo: 20,
      grado: 0,
      habilidad: 'Contundentes'
    }
  ];

  actualizaContundentes() {
    this.habilidades[2].gradoMaximo = 5;
  }

}
