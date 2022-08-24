import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

async function fetchData (urlApi) {
  const response = await fetch(urlApi)
  return await response.json()
}

const anotherFn = async () => {
  try {
    const products = await fetchData(`${API}/products`)
    const product = await fetchData(`${API}/products/${products[0]?.id}`)
    const category = await fetchData(`${API}/categories/${product?.category?.id}`)
    console.log(products[0])
    console.log(product?.title)
    console.log(category?.name)
  } catch (error) {
    console.error(error)
  } finally {
    console.log('Finish promise')
  }
}

anotherFn()
