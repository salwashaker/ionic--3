import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Tab1Page } from '../pages/tab1/tab1';
import { Tab2Page } from '../pages/tab2/tab2';
import { Tab3Page } from '../pages/tab3/tab3';
import { Tab4Page } from '../pages/tab4/tab4';
import { Tab5Page } from '../pages/tab5/tab5';
import { Tab6Page } from '../pages/tab6/tab6';
import { Tab7Page } from '../pages/tab7/tab7';
import { Tab8Page } from '../pages/tab8/tab8';
import { Tab9Page } from '../pages/tab9/tab9';
import { Tab10Page } from '../pages/tab10/tab10';
import { Tab11Page } from '../pages/tab11/tab11';
import { FCM } from '@ionic-native/fcm';
import { LocalNotifications } from '@ionic-native/local-notifications';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    Tab4Page,
    Tab5Page,
    Tab6Page,
    Tab7Page,
    Tab8Page,
    Tab9Page,
    Tab10Page,
    Tab11Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    Tab4Page,
    Tab5Page,
    Tab6Page,
    Tab7Page,
    Tab8Page,
    Tab9Page,
    Tab10Page,
    Tab11Page
  ],
  providers: [
    FCM,
    LocalNotifications,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
