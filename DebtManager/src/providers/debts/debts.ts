import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { PersonLI } from '../persons/persons'

@Injectable()
export class DebtsProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) { }

  public insert(debt: Debt) {
    const key: string = this.datepipe.transform(new Date(), 'HHmmssddMMyyyy');
    return this.save(key, debt);
  }

  private save(key: string, debt: Debt) {
    return this.storage.set(key, debt);
  }

  public delete(key: string) {
    return this.storage.remove(key);
  }

  public update(key: string, debt: Debt) {
    return this.save(key, debt);
  }

  public getAll() {

    let debts: DebtLI[] = [];

    return this.storage.forEach((value: Debt, key: string, iterationNumber: Number) => {
      let debt = new DebtLI();
      debt.key = key;
      debt.debt = value;
      debts.push(debt);
    })
      .then(() => {
        return Promise.resolve(debts);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

}

export class Debt {
  value: number;
  description: string;
  person: PersonLI;
}

export class DebtLI {
  key: string;
  debt: Debt;
}