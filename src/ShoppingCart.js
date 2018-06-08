class ShoppingCart{
  constructor(cart){
    this.cart = cart
  }
  getYieldInEuros(){
    return this.getYieldInKg() * this.price
  }
  getCosts(){
    return this.cost*this.acres
  }
}



module.exports = { ShoppingCart }
