import React from "react"
import ItemList from "./ItemList"
import Menu from "./Menu"
import { useState } from "react"

const fruits = [
    {
        "id": "a1",
        "name": "Apple",
        "color": "Red",
        "emoji": "🍎",
        "price": 1.99
    },
    {
        "id": "a2",
        "name": "Banana",
        "color": "Yellow",
        "emoji": "🍌",
        "price": 0.99
    },
    {
        "id": "a3",
        "name": "Orange",
        "color": "Orange",
        "emoji": "🍊",
        "price": 2.49
    },
    {
        "id": "a4",
        "name": "Grapes",
        "color": "Purple",
        "emoji": "🍇",
        "price": 3.99
    },
    {
        "id": "a5",
        "name": "Strawberry",
        "color": "Red",
        "emoji": "🍓",
        "price": 2.79
    },
    {
        "id": "a7",
        "name": "Watermelon",
        "color": "Green",
        "emoji": "🍉",
        "price": 5.99
    },
    {
        "id": "a8",
        "name": "Pineapple",
        "color": "Yellow",
        "emoji": "🍍",
        "price": 3.89
    },
    {
        "id": "a9",
        "name": "Mango",
        "color": "Orange",
        "emoji": "🥭",
        "price": 2.99
    },
    {
        "id": "a10",
        "name": "Kiwi",
        "color": "Brown",
        "emoji": "🥝",
        "price": 1.79
    },
    {
        "id": "a11",
        "name": "Peach",
        "color": "Orange",
        "emoji": "🍑",
        "price": 2.29
    },
    {
        "id": "a12",
        "name": "Cherry",
        "color": "Red",
        "emoji": "🍒",
        "price": 4.99
    },
    {
        "id": "a13",
        "name": "Pear",
        "color": "Green",
        "emoji": "🍐",
        "price": 1.89
    },
    {
        "id": "a14",
        "name": "Plum",
        "color": "Purple",
        "emoji": "🍑",
        "price": 2.69
    },
    {
        "id": "a15",
        "name": "Raspberry",
        "color": "Red",
        "emoji": "🍇",
        "price": 3.49
    },
    {
        "id": "a16",
        "name": "Lemon",
        "color": "Yellow",
        "emoji": "🍋",
        "price": 1.49
    },
    {
        "id": "a17",
        "name": "Cranberry",
        "color": "Red",
        "emoji": "🍒",
        "price": 3.79
    },
    {
        "id": "a18",
        "name": "Apricot",
        "color": "Orange",
        "emoji": "🍑",
        "price": 2.19
    },
    {
        "id": "a19",
        "name": "Avocado",
        "color": "Green",
        "emoji": "🥑",
        "price": 4.99
    },
    {
        "id": "a20",
        "name": "Coconut",
        "color": "Brown",
        "emoji": "🥥",
        "price": 5.49
    }
]



const colors = []

fruits.forEach((fruit => {
    if (!colors.includes(fruit.color)) {
        colors.push(fruit.color)
    }
}))


export default function Content() {
    const [fruitsList, setFiltered] = useState(fruits)
    const handleColor = (color) => {
        (color) ? setFiltered(fruits.filter(fruit => fruit.color == color)) : setFiltered(fruits)
    }

    return (
        <div>
            <Menu colors={colors} handleColor={handleColor} />
            <ItemList fruitsList={fruitsList} />
        </div>
    )
}
