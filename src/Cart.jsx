<<<<<<< HEAD
import React, { useEffect, useState } from 'react'

=======
import React from 'react'
import Total from './Total'
import CartList from './CartList'
import DataContext from './context/DataContext'
import { useContext } from 'react'
>>>>>>> 18e5b6b0565a554665c2d349cda43cf5c8a334f7

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

