// 비동기 - 예외처리(then, catch, finally)
// 1) then

// function a() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('A')
//       resolve()
//     }, 1000)
//   })
// }

// function b() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('B')
//       resolve()
//     }, 1000)
//   })
// }

// function c() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('C')
//       resolve()
//     }, 1000)
//   })
// }

// function test() {
//   a().then(() => {
//     return b()
//   }).then(() => {
//     return c()
//   }).then(() => {
//     console.log('Done')
//   })
// }
// test()


// 2) catch

function a(number) {
  return new Promise((resolve, reject) => {
    if(number > 4) {
      reject() // 로직의 거부
    }
    setTimeout(() => {
      console.log('A')
      resolve() // 로직의 이행
    }, 1000)
  })
}

async function test() {
  // a(7)
  //   .then(() => {
  //     console.log('Resolve')
  //   })
  //   .catch(() => {
  //     console.log('Reject')
  //   })
  //   .finally(() => {
  //     console.log('Done')
  //   }) // 해당 예외처리로 할때 위 함수 async 삭제 
  try {
    await a(7)
    console.log('Resolve')
  } catch (error) {
    console.log('Reject')
  } finally {
    console.log('Done')
  } // 위의 로직과 동일한 로직이다.
}
test() 
// a가 4보다 작을때 : A, Resolve, Done
// a가 4보다 클때 : Reject, Done, A


