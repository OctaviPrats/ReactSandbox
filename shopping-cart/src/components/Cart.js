import { Component } from "react"
import BubbleAlert from './BubbleAlert'
import CartDetail from './CartDetail'
const styles = {
    cart: {
        backgroundColor: '#00a86e',
        color: '#fff',
        borderRadius: '5px',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20
    }
}

class Cart extends Component {
    render () {
        const { cart, visibleCart, showCart } = this.props
        const count = cart.reduce((acc, el) => acc + el.count, 0)
        return (
            <div>
                <span style={styles.bubble}>
                    {count !== 0 && <BubbleAlert value={count}/>}   
                </span>
                <button onClick={showCart} style={styles.cart}>
                    cart
                </button>
                {visibleCart ? <CartDetail cart={cart}/> : null}
            </div>
        )
    }
}

export default Cart