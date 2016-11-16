import { Component } from '@angular/core';

import { SignIn } from './signin/signin';

@Component({
    templateUrl: 'sign.html'
})
export class Sign {
    signInPage: any = SignIn;
}
