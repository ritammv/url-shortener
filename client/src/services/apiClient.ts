const BASE_URL = "http://localhost:3001";

const getToUrl = (code: string) => {
  fetch(`${BASE_URL}/${code}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const sendUrl = (urlObject: any) => {
  fetch(`${BASE_URL}/api`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(urlObject),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export default {
  getToUrl,
  sendUrl,
};
