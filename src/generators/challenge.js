import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

async function fetchData (urlApi) {
  const response = await fetch(urlApi)
  return await response.json()
}

async function * requestsData () {
  try {
    const products = await fetchData(`${API}/products`)
    const product = await fetchData(`${API}/products/${products[0]?.id}`)
    const category = await fetchData(`${API}/categories/${product?.category?.id}`)

    yield products
    yield product
    yield category
  } catch (error) {
    console.error(error)
  } finally {
    console.log('Finish promise')
  }
}

;(async () => {
  const requests = requestsData()
  const products = await requests.next()
  console.log(products)
})()
