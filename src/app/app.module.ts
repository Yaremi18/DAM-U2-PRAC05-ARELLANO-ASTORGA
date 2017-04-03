import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';

export const CONFIG = {
  apiKey: "AIzaSyBX9EjKLk59vFGkJ2ICKTlBsVhVRxGvAbY",
    authDomain: "fir-sw-ebf90.firebaseapp.com",
    databaseURL: "https://fir-sw-ebf90.firebaseio.com",
    projectId: "fir-sw-ebf90",
    storageBucket: "fir-sw-ebf90.appspot.com",
    messagingSenderId: "510948859486"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
