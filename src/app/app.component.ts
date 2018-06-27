import { Component } from '@angular/core';
import { Habilidad } from './modelo/habilidad.model';

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
    caracteristica: 'AGI',
    bonoCaracteristica: 15,
    profesion: 0,
    objeto: 0,
    especial1: 0,
    especial2: 0,
    total: 0,
    tipoTirada: 'MM'
  }, {
    gradoMaximo: 15,
    grado: 0,
    habilidad: 'De filo',
    caracteristica: 'FUE',
    bonoCaracteristica: 15,
    profesion: 0,
    objeto: 0,
    especial1: 0,
    especial2: 0,
    total: 0,
    tipoTirada: 'BO'
  }];
  actualizaContundentes() {

  }

}
