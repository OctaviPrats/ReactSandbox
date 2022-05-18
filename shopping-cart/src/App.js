import { Component } from 'react' 
import Products from './components/Products.js'
import Layout from './components/Layout.js'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    products: [
      { name: 'Tomato', price: 10, img: '/products/tomato.jpg'},
      { name: 'Onion', price: 20, img: '/products/onion.jpg'},
      { name: 'Lemon', price: 30, img: '/products/lemon.jpg'}
    ],
    cart: [
      // { name: 'Tomato', price: 10, img: '/products/tomato.jpg', count: 1},
    ],
    visibleCart: false
  }
  
  addToCart = (product) => {
    const {cart} = this.state
    let newCart = {}
    if (cart.find(x => x.name === product.name)) {
      newCart = cart.map(x => x.name === product.name ? ({...x, count: x.count+1}) : x)
    }
    else {
      newCart = this.state.cart.concat({...product, count: 1})
    }
    return this.setState({
      cart: newCart
    })
  }

  showCart = () => {
    if (this.state.cart.length)
      this.setState({visibleCart: !this.state.visibleCart})
  }

  render () {
    const { visibleCart } = this.state
    return (
      <div>
        <Navbar 
          cart={this.state.cart} 
          visibleCart={visibleCart} 
          showCart={this.showCart}/>
        <Layout>
          <Title />
          <Products
            addToCart={this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
