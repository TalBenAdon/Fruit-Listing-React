import React, { useState } from 'react'

export default function Search(props) {
    const { setInput, handleInput } = props

    return (
        <div>

            <input type="text" onInput={(e) => handleInput(e.target.value)} />

        </div>
    )
}
