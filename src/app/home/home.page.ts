import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../model/services/common/alert.service';
import { FirebaseService } from '../model/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  form!: FormGroup;

  constructor(private builder: FormBuilder, private alertService: AlertService, private firebaseService: FirebaseService) {}

  ngOnInit() {
      this.startForm();
  }

  startForm(){
    this.form = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      wasItUsefull: ['', [Validators.required, Validators.minLength(10)]],
      canWeImprove: ['', [Validators.minLength(10)]],
      madeYouQuestion: ['', [Validators.required, Validators.minLength(3)]],
      isGoingToCare: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  async submitForm(){
    if(this.form.valid){
      await this.firebaseService.uploadFormToFirebase(this.form.value['email'], this.form.value['wasItUsefull'],
        this.form.value['canWeImprove'], this.form.value['madeYouQuestion'], this.form.value['isGoingToCare']
      );
      this.alertService.presentAlert("Sucesso", "Obrigado por responder a nossa pesquisa");
      this.startForm();
    }else{
      this.alertService.presentAlert("Erro ao enviar", "Cheque os campos e tente novamente");
    }
  }
}
