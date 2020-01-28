import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  [x: string]: any;
  constructor(
    protected alertController: AlertController
  ) { }

  async presentAlert(titulo: string, texto: string) {
    const alert = await this.alertController.create({
      header: titulo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentLoading() {
    const loading= await this.loadingController.create({
     //message: 'Hellooo',
     //duration: 2000,
     spinner:"dots"
   });
   await loading.present();
 }

 async dismissLoading(){
   await this.loadingController.dismiss();
 }

}
