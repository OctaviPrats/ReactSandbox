import { Component } from "react"

const styles = {
    bubbleAlert: {
        backgroundColor: '#E9725a',
        borderRadius: '100px',
        color: '#fff',
        padding: '2px 7px',
        fontSize: '0.9rem'
    }
}

class BubbleAlert extends Component {
    getNumber(n) {
        if (!n) { return ' '}
        return n > 9 ? '9+' : n
    }
    render() {
        const { value } = this.props
        return (
            <span style={styles.bubbleAlert}>
                {this.getNumber(value)}
            </span>
        )
    }
}

export default BubbleAlert