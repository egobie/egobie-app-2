import { Component } from '@angular/core';

import { User } from '../../services/global.service';

@Component({
    templateUrl: 'resident.html'
})
export class Resident {
    constructor(private user: User) {
        console.log("resident - ", this.user.username);
    }
}
