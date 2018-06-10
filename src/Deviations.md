These are codes I'm too scared to throw away for now since the codes aren't working or aren't working optimal.


recursive works but not like I want it too. I'm not sure if it's the if statement or I should map/reduce it first.
//console.log(object.foo1.foo2)

//  console.log(path[path.length-1]);
//    test = path.reduce((acc, val,currentIndex)=>{
    //  console.log("ACC ", typeof(acc))
    //  if(t[path[currentIndex]])===undefined){pathFind(val,acc)}
    //  console.log("CI ", currentIndex);
    //  console.log("object item", t[path[currentIndex]]);
  //    if(typeof(t[path[currentIndex]])===object){pathFind(val, acc)}
    // return acc, val
//  if (typeof (namer)== object)
/*
Attempt for last test not working.
path.map((x,y)=>{
  console.log(object[path[y]]);
  if(TypeError(object[path[y]])==object){
    pathFind(path, object[path[y]])
  }else{ return t[path[y]]}

})
//})
  //return t[path[0]]



  test code.

  const path = ["foo1", "foo2", "bar"]
  const obj = {
      foo1: {
          foo2: {
              bar: "Some value"
          }
      }
    }
    pathFind(path, obj)


promises gone wrong
    return new Promise((resolve, reject) => {
      function loadComplete() {
        if (promisesPromises === undefined) {
          reject(promisesPromises)
        }

        resolve(promisesPromises)
      }
      setTimeout(loadComplete, 1000)
    })
