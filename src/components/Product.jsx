import React from 'react'
import plusIcon from './../assets/plus.svg'
import deleteIcon from './../assets/delete.svg'

export default function Product({ name, price, index, addProduct, deleteProduct, displayAddButton = 'block', displayDeleteButton = 'none' }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: 10, backgroundColor: 'lavender', marginBottom: 10, borderRadius: 10, alignItems: 'center' }}>
            <div style={{ width: 150, textAlign: 'left' }}>{name}</div>
            <div style={{ width: 50, textAlign: 'right' }}>{price}</div>
            <button onClick={() => addProduct({ name, price })} style={{ display: displayAddButton }}>
                <img src={plusIcon} className="icon" />
            </button>
            <button onClick={() => deleteProduct(index)} style={{ display: displayDeleteButton }}>
                <img src={deleteIcon} className="icon" />
            </button>
        </div>
    )
}
