import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router, private toastController: ToastController) {}

  subpage() {
    this.route.navigate(["/subpage"]);
  }
  async presentToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Welcome to SM City Pampanga App',
      duration: 3000,
      position: position
    });

    await toast.present();
  }
}
