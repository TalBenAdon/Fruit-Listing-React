import Item from './Item'
import DataContext from './context/DataContext'
import { useContext, useEffect, useState } from 'react'




export default function ItemList({ clicked }) {

    console.log(clicked);
    // const { items } = useContext(DataContext)
    const [items, setItems] = useState([])


    useEffect(() => {
        fetch(`https://jbh-mockserver.onrender.com/categories/${clicked}`)
            .then(j => j.json())
            .then(res => setItems(res))
    }), []
    // useEffect(() => {
    //     setItems(data[clicked])
    // }, [clicked])


    return (
        <div className='itemList'>

            {items.map((item) => {
                return <Item key={item.id} item={item} />
            })}
        </div>
    )
}

