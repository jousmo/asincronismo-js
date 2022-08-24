const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://api.escuelajs.co/api/v1'

function fetchData (urlApi) {
  return new Promise(function (resolve, reject) {
    const xhttp = new XMLHttpRequest()

    xhttp.open('GET', urlApi, true)

    /*
      0 → Se ha inicializado.
      1 → Loading (cargando).
      2 → Se ha cargado.
      3 → Procesamiento si existe alguna descarga.
      4 → Completado
    */
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          resolve(JSON.parse(xhttp.responseText))
        } else {
          const error = new Error(`Error ${urlApi}`)
          reject(error)
        }
      }
    }
    xhttp.send()
  })
}

/* Example 1 */
fetchData(`${API}/products`)
  .then(data1 => {
    return fetchData(`${API}/products/${data1[0]?.id}`)
      .then(data2 => {
        return fetchData(`${API}/categories/${data2?.category?.id}`)
          .then(data3 => {
            console.log(data1[0])
            console.log(data2.title)
            console.log(data3.name)
          })
      })
  })
  .catch(console.error)
  .finally(() => console.log('Finish promise'))

/* Example 2 */
fetchData(`${API}/products`)
  .then(data1 => fetchData(`${API}/products/${data1[0]?.id}`)
    .then(data2 => fetchData(`${API}/categories/${data2?.category?.id}`)
      .then(data3 => {
        console.log(data1[0])
        console.log(data2.title)
        console.log(data3.name)
      })
    )
  )
  .catch(console.error)
  .finally(() => console.log('Finish promise'))

/* Example 3 */
fetchData(`${API}/products`)
  .then(data1 => {
    let response = { data1 }
    return fetchData(`${API}/products/${data1[0]?.id}`)
      .then(data2 => {
        response = { ...response, data2 }
        return fetchData(`${API}/categories/${data2?.category?.id}`)
      })
      .then(data3 => {
        response = { ...response, data3 }
        console.log(response.data1[0])
        console.log(response.data2.title)
        console.log(response.data3.name)
      })
  }
  )
  .catch(console.error)
  .finally(() => console.log('Finish promise'))

/* Example 3 */
let responseGlobal = {}
fetchData(`${API}/products`)
  .then(data1 => {
    responseGlobal = { data1 }
    return fetchData(`${API}/products/${data1[0]?.id}`)
  })
  .then(data2 => {
    responseGlobal = { ...responseGlobal, data2 }
    return fetchData(`${API}/categories/${data2?.category?.id}`)
  })
  .then(data3 => {
    responseGlobal = { ...responseGlobal, data3 }
    console.log(responseGlobal.data1[0])
    console.log(responseGlobal.data2.title)
    console.log(responseGlobal.data3.name)
  })
  .catch(console.error)
  .finally(() => console.log('Finish promise'))
