import React, { useState } from 'react'
import Content from './Content'
import Cart from './Cart'
import DataContext from './context/DataContext'



export default function Layout() {
    const [cart, setCart] = useState({})
    const [items, setItems] = useState([])


    return (
        <DataContext.Provider value={{ cart, setCart, items, setItems }}>

            <div className='cart-content-div'>
                <Cart />
                <Content />

            </div>
        </DataContext.Provider>
    )
}
