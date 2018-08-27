import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { DebtsProvider } from '../debts/debts';

@Injectable()
export class PersonsProvider {

  constructor(private storage: Storage, private datepipe: DatePipe, private debtsProvider: DebtsProvider) { }

  public insert(person: Person) {
    const key = this.datepipe.transform(new Date(), 'HHmmssddMMyyyy');
    return this.save(key, person);
  }

  private save(key: string, person: Person) {
    return this.storage.set(key, person);
  }

  public delete(key: string) {
    return this.storage.remove(key);
  }

  public update(key, person: Person) {
    return this.save(key, person);
  }

  public getAll() {

    let persons: PersonLI[] = [];

    return this.storage.forEach((value: Person, key: string, iterationNumber: Number) => {
      let person = new PersonLI();
      person.key = key;
      person.person = value;
      persons.push(person);
    })
      .then(() => {
        return Promise.resolve(persons);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  public getDebt(person: PersonLI) {
    const all_debts = this.debtsProvider.getAll();
    let his_debits = [];
    let debt: any;

    for (debt in all_debts) {
      if (debt.person.key != person.key) {
        his_debits.push(all_debts[debt]);
      }
    }

    return his_debits;
  }

}

export class Person {
  name: string;
  phone: string;
}

export class PersonLI {
  key: string;
  person: Person;
}