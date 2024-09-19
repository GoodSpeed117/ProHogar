import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // Importa el módulo completo de Ionic
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendarClearOutline,hourglassOutline,library, playCircle, radio, search,homeOutline,searchOutline,calendarNumberOutline,sendOutline,pinOutline,earthOutline,timeOutline,cashOutline} from 'ionicons/icons';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TabsPage implements OnInit {

  constructor() { 

    addIcons({ calendarClearOutline,hourglassOutline,library, playCircle, radio, search, homeOutline, searchOutline,calendarNumberOutline,sendOutline,pinOutline,earthOutline,timeOutline,cashOutline});
  }

  ngOnInit() {
  }

}
