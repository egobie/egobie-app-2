import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { Sign } from './sign';
import { SignIn } from './signin/signin';
import { SignUp } from './signup/signup';
import { ResetPassword } from './reset/reset';

import { MessageService } from '../../services/message.service';
import { SignService } from '../../services/sign.service';
import { RequestService } from '../../services/request.service';
import { EventService } from '../../services/event.service';
import { User } from '../../services/global.service';

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
        RequestService,
        SignService,
        MessageService,
        EventService,
        User,
    ]
})
export class SignModule {

}
