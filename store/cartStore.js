import { defineStore } from "pinia";

export const cartStore = defineStore('cart', {
    state: () => {
        return {
            cart: []
        }
    },
  actions: {
    addToCart(product, size, quantity) {
      // Check if same product with same size already exists
      const existing = this.cart.find(
        item => item.product.id === product.id && item.selectedSize === size
      )

      
    

      if (existing) {
        
         existing.quantity += quantity
         return 
      } else {
        this.cart.push({
            product: product,
            selectedSize: size,
            quantity: quantity,
        })
      }
    },

    clearCart() {
        this.cart = []
    }
},
  persist: true

})