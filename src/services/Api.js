const api = () => {
  const url = "http://localhost:9000/phones";

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default api;
