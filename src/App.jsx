import { useState } from 'react'
import './App.css'
import Product from './components/Product'
import Header from './components/Header'
import Cart from './components/Cart'

function App() {
  const [products, setProducrs] = useState([
    {
      name: "Set of 4 rings",
      price: 132,

    },
    {
      name: "Ring",
      price: 76,

    },
    {
      name: "Set of 3 bracelets",
      price: 215,

    },
    {
      name: "Bracelet",
      price: 113,

    },
    {
      name: "Set of 3 necklace",
      price: 300,

    },
    {
      name: "Necklace",
      price: 125,

    },
    {
      name: "Set of 4 earrings",
      price: 200,

    },
    {
      name: "Earrings",
      price: 90,

    },
    {
      name: "Gold chain",
      price: 200,

    },
    {
      name: "Silver chain",
      price: 250,

    },
    {
      name: "Leg bracelet",
      price: 75,

    },
    {
      name: "Set of 5 earrings",
      price: 220,

    },
    {
      name: "Bag",
      price: 200,

    },
    {
      name: "Choker necklace",
      price: 199,

    },
    {
      name: "Glasses",
      price: 175,

    },
    {
      name: "Sunglasses",
      price: 97,

    },
    {
      name: " Bead necklace",
      price: 163,

    },
    {
      name: "Scarf",
      price: 68,

    },
    {
      name: "Hair bands",
      price: 10,

    },
    {
      name: "Leather Wallet",
      price: 156,

    },
    {
      name: "Wallet",
      price: 123,

    },
    {
      name: "Watch",
      price: 123,

    },
    {
      name: "Hat",
      price: 123,

    },
    {
      name: "Gloves",
      price: 123,

    },
    {
      name: "Socks",
      price: 123,

    },
    {
      name: "Umbrella",
      price: 123,

    },
    {
      name: "Shoes",
      price: 13,

    },
    {
      name: "Tie",
      price: 12,

    },
    {
      name: "Hair clip",
      price: 13,

    },
    {
      name: "Airpods",
      price: 231,

    },
  ])
  const [cart, setCart] = useState([])
  const [displayCart, setDisplayCart] = useState('none')
  const [displayProducts, setDisplayProducts] = useState('block')

  const addProduct = (product) => {
    setCart([...cart, product])
  }

  const deleteProduct = (index) => {
    setCart([...cart].filter((elem, ind) => ind !== index))
  }

  const setDisplay = (name) => {
    if (name === 'cart') {
      setDisplayCart('block')
      setDisplayProducts('none')
    }
    if (name === 'home') {
      setDisplayProducts('block')
      setDisplayCart('none')
    }
  }

  const buyProducts = () => {
    const newCart = [...cart]
    setCart([])
  }

  return (
    <>
      <div style={{ border: 'solid 1px purple', padding: 10 }}>
        <Header onClickCart={setDisplay} onClickHome={setDisplay} />
        <div style={{ display: displayProducts }}>
          <h2 style={{ textAlign: 'left', padding: 10 }}>List of products</h2>
          <div style={{ width: 800, height: 600, padding: 10, overflowY: 'auto' }}>
            {products.map((product, index) => {
              return <Product key={index} index={index} name={product.name} price={product.price} addProduct={addProduct} deleteProduct={deleteProduct} />
            })}
          </div>
        </div>

        <div style={{ display: displayCart }}>
          <Cart cart={cart} deleteProduct={deleteProduct} totalPrice={cart.reduce((accumulator, product) => {
            return accumulator + product.price;
          }, 0)} buyProducts={buyProducts} />
        </div>
      </div>
    </>
  )
}

export default App
