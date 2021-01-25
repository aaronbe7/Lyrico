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

  export function removeSong(song){
    return fetch(`${BASE_URL}/${song._id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken(),
            'Content-Type': 'application/json',
          }
    }).then(res => res.json());
}