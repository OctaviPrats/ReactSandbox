import { Component } from "react"
import Button from "./Button.js"

const styles = {
    product: {
        border: 'solid 1px #eee',
        borderRadius: '5px',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width: '30%',
        padding: '10px 30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10
    },
    img: {
        maxWidth: '100%',
        maxHeight: '300px',
    }
}

class Product extends Component {
    render() {
        const { product, addToCart } = this.props
        return (
            <div style={styles.product}>
                <img style={styles.img} alt={product.name} src={product.img}/>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <Button onClick={() => addToCart(product)}>
                    Add to Cart
                </Button>
            </div>
        )
    }
}

export default Product