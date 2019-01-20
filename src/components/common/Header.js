import React from 'react';

const Header = (props) => {
    return (
            <div className="header">
                <h3 style={{fontWeight: 700}}>{props.title}</h3>
            </div>
        );
};

export default Header;