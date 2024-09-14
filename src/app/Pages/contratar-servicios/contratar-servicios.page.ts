import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contratar-servicios',
  templateUrl: './contratar-servicios.page.html',
  styleUrls: ['./contratar-servicios.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, FormsModule, RouterModule]
})
export class ContratarServiciosPage {
  servicesForm: FormGroup;
  hours: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];
  minutes: string[] = ['00', '15', '30', '45'];
  municipios: string[] = [];
  allMunicipios: string[] = [];
  
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']; // Inicializar la lista de items

  constructor(private fb: FormBuilder) {
    this.servicesForm = this.fb.group({
      servicioOcasional: [false],
      servicioContinuo: [false],
      diasDeLaSemana: this.fb.group({
        lunes: [false],
        martes: [false],
        miercoles: [false],
        jueves: [false],
        viernes: [false],
        sabado: [false],
        domingo: [false]
      }),
      horasPorDia: [''],
      horaInicioHora: [''],
      horaInicioMinuto: [''],
      horaInicioAmPm: [''],
      estado: [''],
      municipio: ['']
    });
  }

  onSubmit() {
    console.log(this.servicesForm.value);
  }

  onEstadoChange(event: any) {
    const estadoSeleccionado = event.detail.value;
    this.municipios = this.getMunicipiosPorEstado(estadoSeleccionado);
    this.servicesForm.patchValue({ municipio: '' });
  }

  getMunicipiosPorEstado(estado: string): string[] {
    const municipiosPorEstado: { [key: string]: string[] } = {
      nuevoLeon: ['Monterrey', 'San Pedro Garza García', 'Santa Catarina'],
      coahuila: ['Saltillo', 'Torreón', 'Monclova'],
      tamaulipas: ['Reynosa', 'Matamoros', 'Ciudad Victoria']
    };
    return municipiosPorEstado[estado] || [];
  }

  // Método para manejar el evento de scroll infinito
  onIonInfinite(event: any) {
    console.log('Infinite scroll triggered');
    setTimeout(() => {
      const moreItems = ['Item 6', 'Item 7', 'Item 8']; // Simula la carga de más datos
      this.items = [...this.items, ...moreItems]; // Añadir más items a la lista
      
      event.target.complete(); // Detiene la animación del scroll infinito
      
      if (this.items.length >= 20) { // Deshabilita el scroll infinito si hay suficientes elementos
        event.target.disabled = true;
      }
    }, 1000); // Simula un retraso de 1 segundo
  }

  loadMore(event: any) {
    setTimeout(() => {
      const moreMunicipios = this.getMoreMunicipios();
      if (moreMunicipios.length > 0) {
        this.allMunicipios = [...this.allMunicipios, ...moreMunicipios];
        this.municipios = this.allMunicipios;
      }

      event.target.complete();

      if (moreMunicipios.length === 0) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  getMoreMunicipios(): string[] {
    return [];
  }
}
