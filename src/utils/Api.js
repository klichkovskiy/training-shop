class Api {
  constructor(config) {
    this._url = config.baseUrl;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //получение массива загруженных продуктов на сервере
  getListCard() {
    return fetch(`${this._url}${'/products'}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
      .then(this._checkResponse)
  }

}


export default Api = new Api({
  baseUrl: 'https://training.cleverland.by/shop',
  headers: {
    'Content-Type': 'application/json'
  }
})