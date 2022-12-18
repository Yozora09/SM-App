import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private toastController: ToastController) {}
  
  async presentToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Some information are not yet present in the app. Thank you',
      duration: 3000,
      position: position
    });

    await toast.present();
  }
}
