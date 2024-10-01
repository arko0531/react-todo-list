import React from 'react'

const Header = () => {
    const today = new Date();
    
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth()}월 ${today.getDate()}일`;

    return (
        <div>
            <h1>{formattedDate}</h1>
        </div>
    );
}

export default Header