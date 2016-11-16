import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { SignUp } from '../signup/signup';
import { ResetPassword } from '../reset/reset';

@Component({
    templateUrl: 'signin.html',
    styleUrls: [
        '/sign/sign.scss'
    ]
})
export class SignIn {
    constructor(
        private navCtrl: NavController,
        private modalCtrl: ModalController
    ) {

    }

    signUp(event) {
        this.navCtrl.setRoot(SignUp);
    }

    resetPassword(event) {
        let resetPassword = this.modalCtrl.create(ResetPassword);
        resetPassword.present();
    }
}
