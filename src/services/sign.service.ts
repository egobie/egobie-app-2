import { Injectable } from '@angular/core';

import { RequestService } from './request.service';

@Injectable()
export class SignService {
    constructor(
        private requestService: RequestService,
    ) {

    }

    signIn(username, password) {
        return this.requestService.request('Get', 'url');
    }
}
