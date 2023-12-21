import Item from './Item'
import DataContext from './context/DataContext'
import { useContext } from 'react'




export default function ItemList() {

    const { items } = useContext(DataContext)






    return (
        <div className='itemList'>
            {items.map((item) => {
                return <Item key={item.id} item={item} />
            })}
        </div>
    )
}
