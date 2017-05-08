import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostDetails } from './post-details';

@NgModule({
  declarations: [
    PostDetails,
  ],
  imports: [
    IonicPageModule.forChild(PostDetails),
  ],
  exports: [
    PostDetails
  ]
})
export class PostDetailsModule {}
