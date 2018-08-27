import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieDbProvider } from '../../providers/movie-db/movie-db';


@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieDbProvider
  ]
})
export class FeedPage {

  public post1 = {
    owner: "Marty McFly",
    date: "Novembro 5, 1955",
    image_url: "https://ionicframework.com/dist/preview-app/www/assets/img/advance-card-bttf.png",
    description:"Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
    like_count: 12,
    comment_count: 4,
    time: "5 horas atrás"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider:MovieDbProvider) { }

  ionViewDidLoad() {
    this.movieProvider.getLatest().subscribe(
      data => {
        const response = data as any;
        // const response = JSON.parse(re);
        console.log("data: ", response)
      },
      error => {console.log("error: ", error)}
    );
  }

}