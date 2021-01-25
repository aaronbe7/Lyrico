import tokenService from './tokenService';

const BASE_URL = '/api/songs';

export function create(song) {
    return fetch(BASE_URL, {
      method: 'POST',
      body: song,
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    
    }).then(res => res.json());
  }