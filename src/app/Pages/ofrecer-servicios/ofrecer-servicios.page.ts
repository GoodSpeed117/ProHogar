import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ofrecer-servicios',
  templateUrl: './ofrecer-servicios.page.html',
  styleUrls: ['./ofrecer-servicios.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OfrecerServiciosPage implements OnInit {

  formData = {
    nombre: '',
    apellido: '',
    curp: '',
    codigoPostal: '',
    celular: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Formulario enviado', this.formData);
  }
}
