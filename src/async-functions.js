function giveItBackLater(value, callback){
  function loadComplete() {
      callback(value)
    }
  setTimeout(loadComplete, 100)
}

function promiseToGiveItBackLater(promisesPromises){
  return new Promise((resolve, reject) => {
    function loadComplete() {
      if (promisesPromises === undefined) {
        reject(promisesPromises)
      }

      resolve(promisesPromises)
    }
    setTimeout(loadComplete, 1000)
  })
}

function somePromise(promise){
  return new Promise((resolve, reject) => {
    function loadComplete() {
      if (promisesPromises === undefined) {
        reject(promise)
      }

      resolve(promise)
    }

  //  setTimeout(loadComplete, 1000)
  })
}

function addSomePromises(promisesPromises){
  return new Promise((resolve, reject) => {
    function loadComplete() {
      if (promisesPromises === undefined) {
        reject(somePromise(promisesPromises))
      }

      resolve(somePromise(promisesPromises))
    }

  //  setTimeout(loadComplete, 1000)
  })
  .then(somePromise(promisesPromises))

}





module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater }
