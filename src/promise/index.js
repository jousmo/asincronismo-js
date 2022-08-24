/*
  Status Promise:

  Pending => Pendiente
  Fulfill => Cumplida
  Rejected  => Rechazada
*/

/* Example 1 */
const promise = new Promise(function (resolve, reject) {
  resolve('Hey!')
})

promise
  .then(console.log)

/* Example 2 */
const countCows = new Promise(function (resolve, reject) {
  const cows = 15

  if (cows > 10) {
    resolve(`We have ${cows} on the farm`)
  } else {
    reject(new Error('There is no cows on the farm'))
  }
})

countCows
  .then(console.log)
  .catch(console.error)
  .finally(() => console.log('Finish promise'))
