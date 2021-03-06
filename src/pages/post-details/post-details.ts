import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PostDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-post-details',
  templateUrl: 'post-details.html',
})
export class PostDetails {

  post: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.data.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetails');
  }

}
