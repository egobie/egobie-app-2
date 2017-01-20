import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Sign } from './sign/sign';
import { Resident } from './resident/resident';

import { EventService } from '../services/event.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Sign;
  pages: Array<{title: string, component: any}>;

  constructor(
      public platform: Platform,
      private menuCtrl: MenuController,
      private eventService: EventService
  ) {
    this.initializeApp();
    this.menuCtrl.enable(false, );
    this.eventService.subscribe('user:login', (user) => {
        console.log("User user - ", user);
        this.openPage(Resident);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page);
  }
}
