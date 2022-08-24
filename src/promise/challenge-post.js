import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

function postData (urlApi, data) {
  return fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
}

const data = {
  title: 'New Product Jousmo',
  price: 9999,
  description: 'A description',
  categoryId: 1,
  images: ['https://placeimg.com/640/480/any']
}

postData(`${API}/products`, data)
  .then(response => {
    console.log(response)
  })
  .catch(console.error)
  .finally(() => console.log('Finish promise'))
