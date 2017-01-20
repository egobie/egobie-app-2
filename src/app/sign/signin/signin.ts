import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { SignUp } from '../signup/signup';
import { ResetPassword } from '../reset/reset';

import { SignService } from '../../../services/sign.service';
import { EventService } from '../../../services/event.service';
import { MessageService } from '../../../services/message.service';

@Component({
    templateUrl: 'signin.html',
    styleUrls: [
        '/sign/sign.scss'
    ]
})
export class SignIn {
    constructor(
        private navCtrl: NavController,
        private modalCtrl: ModalController,
        private signService: SignService,
        private eventServie: EventService,
        private messageService: MessageService,
    ) {

    }

    signIn(event) {
        this.messageService.showLoading();
        // this.signService.signIn('username', 'password').subscribe(resp => {
            this.eventServie.publish('user:login', 'user-login');
        // });
    }

    signUp(event) {
        this.navCtrl.setRoot(SignUp);
    }

    resetPassword(event) {
        let resetPassword = this.modalCtrl.create(ResetPassword);
        resetPassword.present();
    }
}
