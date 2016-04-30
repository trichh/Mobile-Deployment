var api = {
  getTweets() {
    var url = 'http://localhost:3000/json';
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;
