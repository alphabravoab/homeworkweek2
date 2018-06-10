class ShoppingCart{
  constructor(items){
    this.items=[]
  }
  addItem(){
    return this.items.push({'name': itemName, 'quantity': quantity, 'pricePerUnit': price})
  }
  clear(){
    return this.items.length=0
  }
}



console.log(cart = new ShoppingCart());

module.exports = { ShoppingCart }
