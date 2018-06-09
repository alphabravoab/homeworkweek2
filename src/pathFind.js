function pathFind(path, object){
//console.log(object.foo1.foo2)
  const t=object
//  console.log(path[path.length-1]);
    test = path.reduce((acc, val,currentIndex)=>{
    //  console.log("ACC ", typeof(acc))
    //  if(t[path[currentIndex]])===undefined){pathFind(val,acc)}
    //  console.log("CI ", currentIndex);
    //  console.log("object item", t[path[currentIndex]]);
      if(typeof(t[path[currentIndex]])===object){pathFind(val, acc)}
     return acc, val
//  if (typeof (namer)== object)


})
//other idea: if statement. if it is a string return it if not run function.
  return t[path[0]]
}
module.exports = { pathFind }

const path = ["foo1", "foo2", "bar"]
const obj = {
    foo1: {
        foo2: {
            bar: "Some value"
        }
    }
  }
  pathFind(path, obj)
