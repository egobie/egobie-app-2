import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignIn } from '../signin/signin';
import { MessageService } from '../../../services/message.service';

@Component({
    templateUrl: 'signup.html',
    styleUrls: [
        '/sign/sign.scss'
    ]
})
export class SignUp {
    constructor(
        private navCtrl: NavController,
        private messageService: MessageService
    ) {

    }

    signIn(event) {
        this.navCtrl.setRoot(SignIn);
    }

    isInUse(event, type) {
        this.messageService.showErrorMessage(`The ${type} has been registered`);
    }
}
