import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }

  async presentAlert(subHeader: string, message: string){
    const alert = await this.alertController.create({
      header: 'Mental Health Care Awareness',
      subHeader: subHeader,
      message: message,
      buttons: ['Ok'],
    });

    await alert.present();
  }
}
