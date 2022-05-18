import { Component } from "react"

const styles = {
    cartDetail: {
        backgroundColor: '#fff',
        position: 'absolute',
        borderRadius: '5px',
        marginTop: 30,
        boxShadow: '0px 0px 10px rgb(0,0,0,0.5)',
        right: 50,
        width: 300
    },
    ul: {
        margin: 0,
        padding: 0
    },
    product: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderBottom: '1px solid #00a86e'
    }
}

class CartDetail extends Component {
    render() {
        const { cart } = this.props
        console.info(cart)
        return (
            <div style={styles.cartDetail}>
                <ul style={styles.ul}>
                    {cart.map(x => 
                    <li key={x.name} style={styles.product}>
                        <img src={x.img} width='50'/>
                        <span>{x.name}</span>
                        <span>{x.count}</span>
                    </li>)}
                </ul>
            </div>
        )
    }
}
export default CartDetail