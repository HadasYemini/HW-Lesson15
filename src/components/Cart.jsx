import React, { useState } from 'react'
import Product from './Product'
import shoppingCartIcon from './../assets/shopping-cart.svg'

export default function Cart({ cart, totalPrice, deleteProduct, buyProducts }) {

    return (
        <>
            <div style={{ width: 800,padding: 10, marginTop: 10, display:'flex', justifyContent:'space-between'}}>
                <div style={{ display: 'flex', borderRight:'1px solid purple', marginRight:20}}>
                    <p style={{fontSize:'2em', fontWeight:'bold'}}>Cart</p>
                    <img style={{height:'4em'}} src={shoppingCartIcon} className="icon" />

                </div>
                <div style={{width:600}}>
                    <div style={{height:500, overflowY: 'auto'}}>
                        {cart.map((product, index) => {
                            return <Product key={index} deleteProduct={deleteProduct} index={index} name={product.name} price={product.price} displayAddButton={'none'} displayDeleteButton={'block'} />
                        })}
                    </div>
                    <div style={{ display: 'flex', fontSize: '2em', lineHeight:0, fontWeight: 'bold', padding: 10, borderTop:'1px solid purple', borderBottom:'1px solid purple'}}>
                        <p>Total price = </p>
                        <p style={{ marginLeft: 10 }}>{totalPrice}</p>
                    </div>
                    <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <button style={{ backgroundColor: 'gold', marginTop:20}} onClick={buyProducts}>Buy</button>
                    </div>
                </div>
            </div>
        </>

    )
}
