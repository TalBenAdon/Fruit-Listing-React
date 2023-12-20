import React from 'react'
import Total from './Total'
import CartList from './CartList'
import DataContext from './context/DataContext'
import { useContext } from 'react'

export default function Cart() {

    const { cart } = useContext(DataContext)

    const calcTotal = () => {

        let total = 0
        Object.values(cart).forEach(cartItem => total += (cartItem.price * cartItem.amount))
        return total
    }


    return (
        <div>
            <CartList />
            <Total total={calcTotal()} />
        </div>
    )
}

