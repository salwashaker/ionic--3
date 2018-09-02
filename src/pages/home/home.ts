import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FCM } from '@ionic-native/fcm';
import { LocalNotifications } from '@ionic-native/local-notifications';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  titlefirebase:'';
  bodyfirebase:'';
    constructor(public navCtrl: NavController,public notify: LocalNotifications,private fcm: FCM) {
  
    }
  
  ionViewDidLoad(){
    this.firebaseMessage()
  }
  
  firebaseMessage(){
    this.fcm.getToken().then(token => {
    alert(token);
    });
    
    this.fcm.onNotification().subscribe(data => {
      if(data.wasTapped){
        console.log("Received in background");
        alert(JSON.stringify(data.title+" / "+data.body));
        this.titlefirebase=data.title;
        this.bodyfirebase=data.body;
      } else {
        console.log("Received in foreground");
        alert("Received in forground");
      };
    });
  }
  }
 