import { Component } from '@angular/core';
import { Habilidad } from './modelo/habilidad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  contundentes = 10;

  habilidades: Habilidad[] = [{
    gradoMaximo: 2,
    grado: 0,
    habilidad: 'Sin armadura',
    caracteristica: {
      id: 1,
      caracteristica: 'Agilidad',
      abr: 'AGI',
      valor: '97',
      normal: '0',
      raza: '0',
      total: '10'
    },
    profesion: 0,
    objeto: 0,
    especial1: 0,
    especial2: 0,
    total: 0,
  }, {
    gradoMaximo: 15,
    grado: 0,
    habilidad: 'De filo',
    caracteristica: {
      id: 1,
      caracteristica: 'Fuerza',
      abr: 'FUE',
      valor: '97',
      normal: '0',
      raza: '0',
      total: '10'
    },
    profesion: 0,
    objeto: 0,
    especial1: 0,
    especial2: 0,
    total: 0,
  }];
  actualizaContundentes() {

  }

}
