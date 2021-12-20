function fetchMovies(title) {
  // 대기(pending) : 이행하거나 거부되지 않은 초기 상태
  const OMDB_API_KEY = '7035c60c'
  return new Promise(async(resolve, reject) => {
    try {
      const res = await axios.get(`https://omdbapi.com?apikey=${OMDB_API_KEY}&s=${title}`)
      // 이행(fulfilled) : 연산이 성공적으로 완료됨
      resolve(res)
    } catch(error) {
      console.log(error.message)
      // 거부(rejected) : 연산이 실패함
      reject('Error!')
    }
  })
}

// 별도의 함수로 구분하는 이유
// 1) axios.get이라는 메소드의 실행만 가지고 영화의 정보가 요청되는 코드가 실행되는지 명확하게 확인하기가 어렵다.
// 2) 영화정보를 요청하는 코드에서 문제가 발생한다면 그 문제를 함수내부에서 처리를 해서 실제 코드가 실행되는 곳에서는 결과만 반환되게 만들어 줄 수 있다. 
// 3) 다양한 방식으로 재활용 할 수 있다.

async function test() {
  try {
    const res = await fetchMovies('frozen')
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

test()