import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { Sign } from './sign.component';
import { SignIn } from './signin/signin';
import { SignUp } from './signup/signup';

@NgModule({
    imports: [
        IonicModule
    ],
    declarations: [
        Sign,
        SignIn,
        SignUp
    ],
    exports: [
        Sign
    ],
    entryComponents: [
        Sign,
        SignIn,
        SignUp
    ]
})
export class SignModule {

}
