import tokenService from './tokenService';

const BASE_URL = '/api/songs';

export function create(song) {
    return fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(song),
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken(),
        'Content-Type': 'application/json',
      }
    
    }).then(res => res.json());
  }

  export function getAll() {
    return fetch(BASE_URL, {
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken(),
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json());
  }

  export function removeSong(){
    return fetch(BASE_URL, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
          }
    }).then(res => res.json());
}