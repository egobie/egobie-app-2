import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { Sign } from './sign.component';
import { SignIn } from './signin/signin';
import { SignUp } from './signup/signup';
import { ResetPassword } from './reset/reset';

import { MessageService } from '../../services/message.service';

@NgModule({
    imports: [
        IonicModule
    ],
    declarations: [
        Sign,
        SignIn,
        SignUp,
        ResetPassword
    ],
    exports: [
        Sign
    ],
    entryComponents: [
        Sign,
        SignIn,
        SignUp,
        ResetPassword
    ],
    providers: [
        MessageService
    ]
})
export class SignModule {

}
