import { Component } from '@angular/core';

import { SignIn } from './signin/signin';
import { User } from '../../services/global.service';

@Component({
    templateUrl: 'sign.html'
})
export class Sign {
    signInPage: any = SignIn;

    constructor(private user: User) {
        console.log("sign in - ", this.user.username);
        this.user.username = "changed from sign";
    }
}
