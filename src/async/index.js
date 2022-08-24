const fnAsync = (bool = true) => {
  return new Promise((resolve, reject) => {
    bool
      ? setTimeout(() => resolve('Async'), 3000)
      : reject(new Error('Error!'))
  })
}

const anotherFn = async () => {
  const something = await fnAsync()
  console.log(something)
  console.log('Hello!')
}

/*
  anotherFn no para la ejecución

  Before
  After
  Async
  Hello!
*/
console.log('Before')
anotherFn()
console.log('After')

/*
  anotherFn si para la ejecución

  Before
  Async
  Hello!
  After
*/
;(async () => {
  console.log('Before')
  await anotherFn()
  console.log('After')
})()
