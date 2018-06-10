function pathFind(path, object){
  const t=object
  if(TypeError(object[path[0]])==object){
    pathFind(path.shift(), object[path[0]])
  }else{
    return t[path[0]]
  }
}
module.exports = { pathFind }
