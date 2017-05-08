import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from "../../app/services/reddit.service";
import { PostDetails } from "../post-details/post-details";

@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html'
})
export class PostsPage {

  category: String;
  limit: String;
  posts: any;

  constructor(public navCtrl: NavController,
              private redditService: RedditService) {
    this.category = localStorage.getItem('category') ? localStorage.getItem('category') : "sports";
    this.limit = localStorage.getItem('limit') ? localStorage.getItem('limit') : "5";
  }

  ionViewDidLoad() {
    this.getPosts(this.category, this.limit);
  }

  getPosts(category, limit) {
    this.redditService.fetchPostsByCategoryAndLimit(category, limit).subscribe((response) => {
      this.posts = response.data.children;
    });
  }

  show_post(post) {
    this.navCtrl.push(PostDetails, post);
  }

  update_category(category) {
    console.log(this.getPosts(category, this.limit));
  }

}
