import React, { useState } from 'react'
import Content from './Content'
import Cart from './Cart'

export default function Layout() {
    const [cart, setCart] = useState([])

    return (
        <div className='cart-content-div'>
            <div>

                <Cart cart={cart} setCart={setCart} />
            </div>
            <div>
                <Content setCart={setCart} cart={cart} />
            </div>
        </div>
    )
}
