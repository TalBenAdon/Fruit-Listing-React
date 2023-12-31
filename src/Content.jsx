import React, { useState } from "react"


import ItemList from "./ItemList"
import Categories from "./Categories"






export default function Content() {



    const [clicked, setClicked] = useState([])





    return (

        <div>


            {clicked ? <Categories setClicked={setClicked} /> : <ItemList clicked={clicked} />}

            {/* <productInfo/> */}

        </div>
    )
}
