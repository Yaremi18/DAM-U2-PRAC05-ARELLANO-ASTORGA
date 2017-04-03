import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

import { FirebaseListObservable, AngularFireDatabase} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies:FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,public database:AngularFireDatabase,public alertCtrl: AlertController) {
    this.movies = this.database.list('/movies');
  }

  addMovie(){
    let prompt = this.alertCtrl.create({
    title: 'Movie Name',
    message: "Enter a name for the movie.",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.movies.push({
            title: data.title
          });
        }
      }
    ]
  });
  prompt.present();

  }

}
