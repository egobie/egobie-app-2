import { Injectable } from '@angular/core';

@Injectable()
export class User {
    public id: number = -1;
    public username: string;
    public firstName: string;
    public lastName: string;
    public token: string;
    public email: string;
    public phoneNumber: string;

    public homeAddressCity: string;
    public homeAddressStreet: string;
    public homeAddressState: string;
    public homeAddressZip: string;

    public workAddressCity: string;
    public workAddressStreet: string;
    public workAddressState: string;
    public workAddressZip: string;

    isLogin() {
        return this.id > 0;
    }
}
