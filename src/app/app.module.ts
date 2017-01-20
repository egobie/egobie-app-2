import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { SignModule } from './sign/sign.module';
import { ResidentModule } from './resident/resident.module';

import { EventService } from '../services/event.service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    SignModule,
    ResidentModule,
    IonicModule.forRoot(MyApp, {
        mode: 'ios',
        iconMode: 'md',
        tabsPlacement: 'bottom',
        pageTransition: 'ios-transition'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
      EventService
  ]
})
export class AppModule {}
