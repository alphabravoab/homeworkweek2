function pathFind(path, object){
  x=typeof(object[path[0]])
  console.log(x);
  if(x===Object){
    return pathFind(path.shift(), object[path[0]])
  }else{
    return object[path[0]]; pathFind(path.shift(), object[path[1]])
  }
}
module.exports = { pathFind }
