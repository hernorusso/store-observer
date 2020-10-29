import React from 'react';

export const AddItem = ({onClick}) => {
    return (
        <button style={{margin: "10px"}} onClick={onClick}>add Item</button>
    );
}