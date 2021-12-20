// 비동기 - 콜백과 프로미스 객체의 이해

// function a(callback) {
//   setTimeout(() => {
//     console.log('A')
//     callback()
//   },1000)
// }
// ...
// ...
// ...
//
// 위의 함수를 콜백으로 표현
// a(function () {
//   b(function (){
//     ...
//     console.log('Done')
//   })
// })


function a() {
  // promise : 약속의 객체
  // 위 함수에서 callback이 아래 함수에서 resolve가 된다.
  return new Promise(function(resolve) {
    setTimeout(function () {
      console.log('A')
      resolve('Hello A')
    },1000)
  })
}

function b() {
  return new Promise(function(resolve) {
    setTimeout(function () {
      console.log('B')
      resolve('Hello B')
    },1000)
  })
}

function c() {
  return new Promise(function(resolve) {
    setTimeout(function () {
      console.log('C')
      resolve('Hello C')
    },1000)
  })
}

function d() {
  return new Promise(function(resolve) {
    setTimeout(function () {
      console.log('D')
      resolve('Hello D')
    },1000)
  })
}

async function test() {
  const h1 = await a()
  const h2 = await b()
  const h3 = await c()
  const h4 = await d()
  console.log('Done')
  console.log(h1, h2, h3, h4)
}

test()

