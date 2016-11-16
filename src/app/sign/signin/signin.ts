import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignUp } from '../signup/signup';

@Component({
    templateUrl: 'signin.html',
    styleUrls: [
        '/sign/sign.scss'
    ]
})
export class SignIn {
    constructor(private navCtrl: NavController) {

    }

    signUp(event) {
        this.navCtrl.push(SignUp);
    }
}
