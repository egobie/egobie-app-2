import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    templateUrl: 'signup.html',
    styleUrls: [
        '/sign/sign.scss'
    ]
})
export class SignUp {
    constructor(private navCtrl: NavController) {

    }

    signIn(event) {
        this.navCtrl.pop();
    }
}
