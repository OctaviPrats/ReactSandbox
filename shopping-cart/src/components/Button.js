import { Component } from "react"

const styles = {
    btn: {
        backgroundColor: '#00A86B',
        color: '#fff',
        padding: '10px 30px',
        borderRadius: '5px',
        border: 'none',
        alignSelf: 'flex-end',
        cursor: 'pointer'
    }
}

class Button extends Component {
    render() {
        return (
            <button style={styles.btn} {...this.props}/>
        )
    }
}

export default Button