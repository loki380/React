import React from 'react';


function ButtonWithJSXStyle() {
    const styles = {
        buttonRed: {
            backgroundColor: '#f44336',
            border: 'none',
            padding: '15px 32px' 
        } 
    };

    return <button style={styles.buttonRed}>Button with class in JSX</button>
}

export default ButtonWithJSXStyle;