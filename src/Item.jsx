import React from 'react'



export default function Item({ cart, setCart, fruit }) {

    const addToCart = () => {

        const inCart = cart.find(item => item.id === fruit.id)
        if (!inCart) {
            const newCartItem = { ...fruit, amount: 1 }
            const newCart = [...cart, newCartItem]
            setCart(newCart)
        } else {
            inCart.amount++
            setCart([...cart])
        }

    }


    const ifInCart = () => {
        const inCart = cart.find(item => item.id === fruit.id)
        if (!inCart) {
            return <button onClick={addToCart}>Add To Cart</button>
        } else {
            return <button onClick={addToCart}>+</button>
        }
    }



    return (

        <div className='fruit'>
            <div>{fruit.name}</div>
            <div>{fruit.emoji}</div>
            <div>{fruit.price}</div>
            <div>
                {ifInCart()}
            </div>

            {/* <button onClick={addToCart}>+</button> */}

        </div>
    )
}
