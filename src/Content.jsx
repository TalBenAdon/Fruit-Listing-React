import React, { useState } from "react"


import ItemList from "./ItemList"
import Categories from "./Categories"






export default function Content({ clicked, setClicked, categories, setCategories }) {









    return (

        <div>
            <button onClick={() => setClicked()}>Back</button>
            {clicked ? <ItemList clicked={clicked} setClicked={setClicked} /> : <Categories categories={categories} setCategories={setCategories} setClicked={setClicked} />}

            {/* <productInfo/> */}

        </div>
    )
}
