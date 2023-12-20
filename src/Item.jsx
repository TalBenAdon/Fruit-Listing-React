import React from 'react'
import DataContext from './context/DataContext'
import { useContext } from 'react'


export default function Item({ item }) {
    let { name, emoji, price, id } = item
    // const valueFromContext = {cart, setCart}
    const { cart, setCart } = useContext(DataContext)

    const handlePlus = () => {
        let newCart = { ...cart }

        //if exists
        if (newCart[id]) {
            newCart[id].amount += 1
        } else {
            //creates location of id in the newCart object and then we tell it it's value
            newCart[id] = { ...item, amount: 1 }
        }
        return setCart(newCart)
    }

    const handleMinus = () => {
        if (cart[id]) {
            let newCart = { ...cart }
            if (newCart[id].amount > 1) {

                newCart[id].amount -= 1
            } else {
                delete newCart[id]
            }
            setCart(newCart)
        }
    }






    return (

        <div className='fruit'>
            <div>{name}</div>
            <div>{emoji}</div>
            <div>{price}</div>
            <div>
                {cart[id]?.amount >= 1 ? <div><button onClick={handlePlus}>+</button>
                    <span>{cart[id]?.amount || 0}</span>
                    <button onClick={handleMinus}>-</button>
                </div> : <button onClick={handlePlus}>Add To Cart</button>}


            </div>



        </div>
    )
}


// Object.keys
// Object.values
// Object.entries

// take the cart, in cartList map it to cartItem