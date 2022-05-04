import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() {}
  createDb() {
    return {
      User: [
        {
          id!: 6 ,
          birthDate!:16-09-2007,
          name!: 'bella',
          avatar!: 'pic',
          bio!: ' bank manager',
        },
      ],

        Note: [
        {
          id!: 6 ,
          title!: 'managers',
          date!:16-09-2007,
      }
       
      ],
    };
  }

}
