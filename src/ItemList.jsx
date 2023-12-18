import Item from './Item'





export default function ItemList({ cart, setCart, fruitsList, addToCart }) {






    return (
        <div className='itemList'>
            {fruitsList.map((fruit) => {
                return <Item key={fruit.id} fruit={fruit} cart={cart} setCart={setCart} addToCart={addToCart} />
            })}
        </div>
    )
}
