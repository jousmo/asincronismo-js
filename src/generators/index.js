function * gen () {
  yield 1
  yield 2
  yield 3
}

const g = gen()
console.log(g.next().value) // 1
console.log(g.next().value) // 2
console.log(g.next().value) // 3
console.log(g.next().value) // undefined

function * iterate (arr) {
  for (const value of arr) {
    yield value
  }
}

const it = iterate(['oscar', 'omar', 'ana', 'lucia', 'juan'])

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
