import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';  // Importa RouterModule para el enrutamiento

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, RouterModule]  // Incluye RouterModule aquí
})
export class LoginPage implements OnInit {

  ionicForm!: FormGroup;  // Usa el operador de afirmación no nulo

  constructor(public formBuilder: FormBuilder, private navCtrl: NavController) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  login() {
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return;  // Solo regresa sin un valor específico
    } else {
      console.log('Login successful!');
      this.navCtrl.navigateForward('/home');  // Navega a la página de inicio
    }
  }

}
