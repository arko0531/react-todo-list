import React from 'react'
import '../../css/Button.css'

const Button = (props) => {
    const {title, onClick} = props;

    let buttonStyle = '';
    if (title === '작성')
        buttonStyle = 'button--write';
    else if (title === '삭제')
        buttonStyle = 'button-delete';
    
    return (
        <button className={buttonStyle} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button