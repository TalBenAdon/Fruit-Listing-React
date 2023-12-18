import React, { useEffect, useState } from 'react'
import { addToCart } from './CartUtilities';



export default function Cart({ cart, setCart }) {
    console.log(cart);



    const [total, setTotal] = useState(0)


    const clearCart = () => {
        setCart([])
    }
    const addToCartInCart = (item) => {


        item.amount++
        setCart([...cart])
    }

    const subtractFromCart = (item) => {
        const updatedCart = [...cart]
        const index = updatedCart.findIndex(cartItem => cartItem.id === item.id)
        if (index !== -1) {
            if (item.amount === 1) {
                updatedCart.splice(index, 1)
            } else {
                item.amount--
            }
            setCart(updatedCart)
        }
    }


    const calculateTotal = () => {
        let totalCartPrice = 0
        cart.forEach(item => {
            totalCartPrice += item.price * item.amount
        });
        const formattedTotal = Number(totalCartPrice.toFixed(2))

        setTotal(formattedTotal)
    }

    useEffect(() => {
        calculateTotal();
    }, [cart]);

    return (
        <div >
            {cart.map((item) => {
                const totalPrice = item.price * item.amount
                const formattedPrice = Number(totalPrice.toFixed(2))
                return <div key={item.id}>
                    <div>{item.name}</div>
                    <div>{item.emoji}</div>
                    <div>{item.amount}</div>
                    <div>{formattedPrice}</div>
                    <button onClick={() => subtractFromCart(item)}>-</button>
                    <button onClick={() => addToCartInCart(item)}>+</button>
                </div>
            })}

            <div>
                <div className='total-display'>{total}</div>
            </div>




            <button className='clear-button' onClick={clearCart}>Clear</button>
        </div>

    )
}
