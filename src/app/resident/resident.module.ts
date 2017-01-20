import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { Resident } from './resident';
import { User } from '../../services/global.service';

@NgModule({
    imports: [
        IonicModule
    ],
    declarations: [
        Resident
    ],
    exports: [
        Resident
    ],
    entryComponents: [
        Resident
    ],
    providers: [
        User
    ],
})
export class ResidentModule {

}
