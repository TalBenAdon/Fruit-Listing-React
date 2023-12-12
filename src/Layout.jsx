import React from 'react'
import Content from './Content'
import Cart from './Cart'

export default function Layout() {
    return (
        <div className='cart-content-div'>
            <div>
                <Cart />
            </div>
            <div>
                <Content />
            </div>
        </div>
    )
}
