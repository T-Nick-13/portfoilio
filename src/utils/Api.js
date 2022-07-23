export default class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  getHeaders() {
   const token = localStorage.getItem('token');
    return {
      ...this.headers,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(res)
  }

  getCards() {
    return fetch(`${this._url}`, {
      headers: this._headers
    })
    .then(this._checkServerResponse);
  }

  getUserData() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
    .then(this._checkServerResponse);
  }

  getContent(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(this._checkServerResponse);
  };

}
