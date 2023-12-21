import React from 'react'

export default function Total({ total }) {


    // const total = Object.values(cart).reduce((acc, item) => {
    //     return acc + item.price * item.amount
    // }, 0)

    return (
        <div>{total.toFixed(2)}</div>
    )
}
