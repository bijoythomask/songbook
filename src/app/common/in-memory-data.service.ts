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
      {id:1, title: 'Aong1', language: 'English'},
      {id:2, title: 'Bong2', language: 'English'},
      {id:3, title: 'Cong3', language: 'English'},
      {id:4, title: 'dong4', language: 'English'},
      {id:5, title: 'eong5', language: 'English'},
      {id:6, title: 'fong6', language: 'English'},
      {id:7, title: 'hong7', language: 'English'},
      {id:8, title: 'iong8', language: 'English'}
    ];

    return {users,songs};
      
  }
}