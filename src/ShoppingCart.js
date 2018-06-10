class ShoppingCart{
  constructor(items){
    this.items=[]
  }
  getItems(){
    return this.items
  }
  addItem(itemName, quantity, price ){
    return this.items.push({'name': itemName, 'quantity': quantity, 'pricePerUnit': price})
  }
  clear(){
    return this.items.length=0
  }
  clone(){
    return new ShoppingCart(this.items.map((item) => Object.assign({}, item )) )
  }
}



console.log(cart = new ShoppingCart())

module.exports =  ShoppingCart
