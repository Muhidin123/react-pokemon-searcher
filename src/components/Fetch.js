class Fetch {
  constructor() {}
  makeOptions(method, body = {}) {
    return {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
  }
  generalFetch(url, options = {}) {
    return fetch(url, options).then(res => res.json());
  }
}
export default Fetch;
