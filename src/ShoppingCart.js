class ShoppingCart{
  constructor(items){
    this.items =[]
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
    const cloneCart= new ShoppingCart()
    cloneCart.items= this.items.map((x)=> this.addItem(x) )

    return cloneCart
  }
}



console.log(cart = new ShoppingCart())

module.exports =  ShoppingCart
