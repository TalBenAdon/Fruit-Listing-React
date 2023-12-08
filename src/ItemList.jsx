import Item from './Item'





export default function ItemList(props) {






    return (
        <div className='itemList'>
            {props.fruitsList.map((fruit) => {
                return <Item key={fruit.id} name={fruit.name} color={fruit.color} emoji={fruit.emoji} price={fruit.price} />
            })}
        </div>
    )
}
