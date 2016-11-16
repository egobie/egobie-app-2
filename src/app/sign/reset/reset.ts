import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    templateUrl: 'reset.html',
    styleUrls: [
        '/sign/reset/reset.scss'
    ]
})
export class ResetPassword {
    step: number = 1;

    constructor(private viewCtrl: ViewController) {

    }

    resetPassword(event) {
        if (this.step === 3) {
            this.step = 1;
        } else {
            this.step += 1;
        }
    }

    dismiss(event) {
        this.viewCtrl.dismiss();
    }
}
