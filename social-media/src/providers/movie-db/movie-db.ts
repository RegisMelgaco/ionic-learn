import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import movie_db_json from "../../../conf/movie_db.json";

/*
  Generated class for the MovieDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieDbProvider {

  constructor(public http: HttpClient) { }

  getLatest() {
    return this.http.get( movie_db_json.base_api_url + "/latest" + "?api_key=" + movie_db_json.key);
  }

}
