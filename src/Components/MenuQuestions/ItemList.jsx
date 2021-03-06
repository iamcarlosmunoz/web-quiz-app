import React from 'react'

const ItemList = ( { id, name, text, handleSelect }) => (
    <li onClick={handleSelect}>
        {text} <button className="no-check" name={name} id={id}> </button>
    </li>
)

export default ItemList