import React from 'react';

const Button = (props) => {
    return (
        <div style={{
            background: "none",
            border: "1px solid #9b2e2e",
            textAlign: "center",
            borderRadius: "8px",
            boxSizing: "border-box"
        }}>
            <button style={{
                fontSize: "18px",
                background: "none",
                border: "none",
                borderRadius: "8px",
                padding: "5px",
                cursor: "pointer"
            }}>
                {props.text}
            </button>
        </div >
    );
};

export default Button;