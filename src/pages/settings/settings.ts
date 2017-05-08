import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  category: String;
  limit: any;

  constructor(public navCtrl: NavController) {
    this.category = localStorage.getItem('category') ? localStorage.getItem('category') : "sports";
    this.limit = localStorage.getItem('limit') ? localStorage.getItem('limit') : "5";

  }

  update_category(category) {
    this.category = category;
    localStorage.setItem('category', category);

  }

  update_limit(limit) {
    this.limit = limit;
    localStorage.setItem('limit', limit);
  }

}
