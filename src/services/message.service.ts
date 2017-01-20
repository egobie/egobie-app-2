import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from 'ionic-angular';


@Injectable()
export class MessageService {
    constructor(
        private toastCtrl: ToastController,
        private loadingCtrl: LoadingController
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

    showLoading() {
        let loading = this.loadingCtrl.create({
            spinner: 'circles',
            dismissOnPageChange: true,
            duration: 10000
        });
        loading.present();
    }
}
