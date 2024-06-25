import React from 'react'
import homeIcon from './../assets/home.svg'
import shoppingCartIcon from './../assets/shopping-cart.svg'

export default function ({ onClickHome, onClickCart }) {
    return (
        <div style={{ display: 'flex', width: 800, justifyContent: 'space-between', borderBottom: 'solid 1px purple'}}>
            <div onClick={() => onClickHome('home')} style={{cursor:'pointer'}}>
                <img src={homeIcon} className="icon" />
            </div>
            <h1>Top-Accessories</h1>
            <div onClick={() => onClickCart('cart')} style={{cursor:'pointer'}}>
                <img src={shoppingCartIcon} className="icon" />
            </div>
        </div>
    )
}
