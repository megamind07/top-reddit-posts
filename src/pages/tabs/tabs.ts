import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { ContactPage } from '../contact/contact';
import { PostsPage } from '../posts/posts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PostsPage;
  tab2Root = SettingsPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
