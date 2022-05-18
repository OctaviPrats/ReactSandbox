import { Component } from "react"
import Logo from './Logo'
import Cart from './Cart'

const styles = {
    navbar: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100px',
        padding: '0px 50px',
        borderBottom: '2px solid #00a86e',
        position: 'relative',
        boxShadow: '0px 2px 10px rgb(0,0,0,0.1)'
    }
}

class Navbar extends Component {
    render() {
        const { cart, visibleCart, showCart } = this.props
        return (
            <nav style={styles.navbar}>
                <Logo />
                <Cart 
                    cart={cart}
                    visibleCart={visibleCart}
                    showCart={showCart}/>
            </nav>
        )
    }
}

export default Navbar