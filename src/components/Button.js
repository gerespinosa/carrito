import { Component } from "react";
const styles = {
    button: {
        backgroundColor: '#0a283e',
        color: 'white',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
}

class Button extends Component {
    render() {
        return (
            <button style={styles.button} {...this.props} />
        )
    }
}

export default Button