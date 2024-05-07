import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  formsPath = 'forms'

  constructor(private firestore: AngularFirestore, private loadingController: LoadingController) { }

  async uploadFormToFirebase(email: string, wasItUsefull: string, canWeImprove: string, madeYouQuestion: string, isGoingToCare: string){
    const loading = await this.loadingController.create({
      message: "Enviando formulário..."
    });
    await loading.present();

    if(canWeImprove.replace(/\s+/g, '') != ''){
      canWeImprove = canWeImprove;
    } else {
      canWeImprove = 'didNotAnswer';
    }

    await this.firestore.collection(this.formsPath).add({ email, wasItUsefull, canWeImprove, madeYouQuestion, isGoingToCare });
    loading.dismiss();
  }
}
