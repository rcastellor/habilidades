import { Component, OnInit, Input } from '@angular/core';
import { Habilidad } from '../modelo/habilidad.model';


@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {

  @Input() gradoMaximo: number;
  @Input() gradoSeleccionado: number;
  @Input() puntosDisponibles: number;
  @Input() habilidad: Habilidad;


  HABILIDADES_GRADO5 = 10;
  HABILIDADES_GRADO2 = 10;


  private bonus: number;

  private controlesGrado: {activado: boolean, bonificacion: number, indice: number, readonly: boolean}[] = [];

  private controlesGrado5: {activado: boolean, indice: number, readonly: boolean}[] = [];
  private controlesGrado2: {activado: boolean, indice: number, readonly: boolean}[] = [];
  private controlesGrado1: {activado: boolean, indice: number, readonly: boolean}[] = [];

  constructor() { }

  ngOnInit() {
    if (this.gradoMaximo === -1) {
      this.gradoMaximo = 15;
    }
    for (let i = 0; i < this.gradoMaximo; i++) {
      if (i < this.HABILIDADES_GRADO5) {
        if (i < this.gradoSeleccionado) {
          this.controlesGrado5.push({activado: true, indice: i, readonly: false});
        } else {
          this.controlesGrado5.push({activado: false, indice: i, readonly: false});
        }
      } else if (i < this.HABILIDADES_GRADO5 + this.HABILIDADES_GRADO2) {
        if (i < this.gradoSeleccionado) {
          this.controlesGrado2.push({activado: true, indice: i, readonly: false});
        } else {
          this.controlesGrado2.push({activado: false, indice: i, readonly: false});
        }
      } else {
        if (i < this.gradoSeleccionado) {
          this.controlesGrado1.push({activado: true, indice: i, readonly: false});
        } else {
          this.controlesGrado1.push({activado: false, indice: i, readonly: false});
        }
      }
    }
    this.calculaBonusGradosHabilidad();
  }

  public seleccionaGrado5(grado: number) {
    if (this.controlesGrado5[grado].activado === false) {
      this.gradoSeleccionado = grado;
    } else {
      this.gradoSeleccionado = grado - 1;
    }
    for (let i = 0; i < this.gradoMaximo && i < this.HABILIDADES_GRADO5; i++) {
      if (i <= this.gradoSeleccionado) {
        this.controlesGrado5[i].activado = true;
      } else {
        this.controlesGrado5[i].activado = false;
      }
    }
    for (const control of this.controlesGrado2) {
      control.activado = false;
    }
    for (const control of this.controlesGrado1) {
      control.activado = false;
    }
    this.calculaBonusGradosHabilidad();
  }

  public seleccionaGrado2(grado: number) {
    if (this.controlesGrado2[grado - this.HABILIDADES_GRADO5].activado === false) {
      this.gradoSeleccionado = grado;
    } else {
      this.gradoSeleccionado = grado - 1;
    }
    for (const control of this.controlesGrado5) {
      control.activado = true;
    }
    for (let i = this.HABILIDADES_GRADO5; i < this.gradoMaximo && i < (this.HABILIDADES_GRADO5 + this.HABILIDADES_GRADO2); i++) {
      if (i <= this.gradoSeleccionado) {
        this.controlesGrado2[i - this.HABILIDADES_GRADO5].activado = true;
      } else {
        this.controlesGrado2[i - this.HABILIDADES_GRADO5].activado = false;
      }
    }
    for (const control of this.controlesGrado1) {
      control.activado = false;
    }
    this.calculaBonusGradosHabilidad();
  }
  public seleccionaGrado1(grado: number) {
    if (this.controlesGrado2[grado - 30].activado === false) {
      this.gradoSeleccionado = grado;
    } else {
      this.gradoSeleccionado = grado - 1;
    }
    for (const control of this.controlesGrado5) {
      control.activado = true;
    }
    for (let i = 10; i < this.gradoMaximo && i < 20; i++) {
      if (i <= this.gradoSeleccionado) {
        this.controlesGrado2[i - 10].activado = true;
      } else {
        this.controlesGrado2[i - 10].activado = false;
      }
    }
    for (const control of this.controlesGrado1) {
      control.activado = false;
    }
    this.calculaBonusGradosHabilidad();
  }

  private calculaBonusGradosHabilidad() {
    this.bonus = 0;
    if (this.controlesGrado5[0].activado === false) {
      this.bonus = -25;
    }
    for (const control of this.controlesGrado5) {
      if (control.activado) {
        this.bonus += 5;
      } else {
        break;
      }
    }
    for (const control of this.controlesGrado2) {
      if (control.activado) {
        this.bonus += 2;
      } else {
        break;
      }
    }
    for (const control of this.controlesGrado1) {
      if (control.activado) {
        this.bonus += 1;
      } else {
        break;
      }
    }
    this.habilidad.total = Number(this.bonus) + Number(this.habilidad.bonoCaracteristica)
                            + Number(this.habilidad.profesion) + Number(this.habilidad.objeto)
                            + Number(this.habilidad.especial1) + Number(this.habilidad.especial2);
  }
}
