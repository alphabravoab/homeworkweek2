function giveItBackLater(value, callback){
  function loadComplete() {
      callback(value)
    }
  setTimeout(loadComplete, 100)
}

function addSomePromises(promisesPromises){
  return new Promise((resolve, reject) => {
    function loadComplete() {
      if (test === undefined) {
        reject(promisesPromises.concat(promisesPromises.concat(promisesPromises)))
      }

      resolve(promisesPromises.concat(promisesPromises))
    }
    setTimeout(loadComplete, 1000)
  })
}


function promiseToGiveItBackLater(){

}







module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater }
