import { Component } from "react"

const styles = {
    logo: {
        fontSize: '2em'
    }
}

class Logo extends Component {
    render() {
        return (
            <div style={styles.logo}>
                Shop
            </div>
        )
    }
}

export default Logo