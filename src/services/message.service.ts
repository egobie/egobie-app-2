import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class MessageService {
    constructor(
        private toastCtrl: ToastController
    ) {

    }

    showErrorMessage(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 1500,
            position: 'top',
            cssClass: 'egobie-error',
            dismissOnPageChange: true
        });
        toast.present();
    }
}
