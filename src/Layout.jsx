import React, { useState } from 'react'
import Content from './Content'
import Cart from './Cart'
import DataContext from './context/DataContext'




export default function Layout() {
    const [cart, setCart] = useState({})
    // const [items, setItems] = useState([])



    return (
        <DataContext.Provider value={{ cart, setCart }}>

            <div className='cart-content-div'>
                {/* <Back setClicked={setClicked} /> */}
                <Cart />
                <Content setClicked={setClicked} clicked={clicked} />

            </div>
        </DataContext.Provider>
    )
}
