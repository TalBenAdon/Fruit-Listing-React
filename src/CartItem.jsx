import React from 'react'
import DataContext from './context/DataContext'
import { useContext } from 'react'

export default function CartItem({ item }) {
    const { name, emoji, amount, id } = item

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
        <div>
            <div>{name}</div>
            <div>{emoji}</div>

            <div>{amount}</div>
            <div>
                <div><button onClick={handlePlus}>+</button>

                    <button onClick={handleMinus}>-</button>
                </div>
            </div>
        </div>
    )
}
