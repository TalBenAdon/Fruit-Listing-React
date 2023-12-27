import Item from './Item'
import DataContext from './context/DataContext'
import { useContext, useState } from 'react'
import data from './data.js'



export default function ItemList({ clicked }) {

    console.log(clicked);
    // const { items } = useContext(DataContext)

    const [category, setDataCategory] = useState(clicked)






    return (
        <div className='itemList'>
            {data[category].map((item) => {
                return <Item key={item.id} item={item} />
            })}
        </div>
    )
}
