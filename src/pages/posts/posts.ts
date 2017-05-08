import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from "../../app/services/reddit.service";
import { PostDetails } from "../post-details/post-details";

@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html'
})
export class PostsPage {

  category: String = "sports";
  limit: Number = 5;
  posts: any;

  constructor(public navCtrl: NavController,
              private redditService: RedditService) {

    this.getPosts("sports", 5);

  }

  getPosts(category, limit) {
    this.redditService.fetchPostsByCategoryAndLimit(category, limit).subscribe((response) => {
      this.posts = response.data.children;
    });
  }

  show_post(post) {
    this.navCtrl.push(PostDetails, post);
  }

}
