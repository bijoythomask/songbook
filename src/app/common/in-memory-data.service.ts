import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];

    let songs = [
      {id:1, title: 'Song1', language: 'English'},
      {id:2, title: 'Song2', language: 'English'},
      {id:3, title: 'Song3', language: 'English'},
      {id:4, title: 'Song4', language: 'English'},
      {id:5, title: 'Song5', language: 'English'},
      {id:6, title: 'Song6', language: 'English'},
      {id:7, title: 'Song7', language: 'English'},
      {id:8, title: 'Song8', language: 'English'}
    ];

    return {users,songs};
      
  }
}