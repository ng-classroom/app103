import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { HeroesPage } from '../pages/heroes/heroes';
import { SpeakersPage } from '../pages/speakers/speakers';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openUsersPage(){
    this.rootPage = UsersPage;
  }

  openHomePage(){
    this.rootPage = HomePage;
  }

  openSpeakersPage(){
    this.rootPage = SpeakersPage;
  }

  openHeroresPage(){
    this.rootPage = HeroesPage;
  }
}