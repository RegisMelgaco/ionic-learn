import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PersonsProvider, PersonLI } from '../../providers/persons/persons';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  persons: PersonLI[];

  constructor(public navCtrl: NavController, private personsProvider: PersonsProvider) { }

  ionViewDidEnter () {
    this.personsProvider.getAll().then(results => {
      this.persons = results;
      console.log(this.persons)
    });
  }
}
