import React from 'react'
import CartItem from './CartItem'
import DataContext from './context/DataContext'
import { useContext } from 'react'

export default function CartList() {
    const { cart } = useContext(DataContext)


    return (
        <div>
            {Object.values(cart).map(item => {
                return <CartItem key={item.id} item={item} />
            })}

        </div>
    )
}
