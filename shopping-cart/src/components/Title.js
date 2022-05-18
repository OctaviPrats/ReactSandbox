import { Component } from "react"

const styles = {
    title: {
        marginBottom: '30px',
        textTransform: 'Capitalize'
    }
}

class Title extends Component {
    render () {
        return (
            <h1 style={styles.title}>Veggies</h1>
        )
    }
}

export default Title