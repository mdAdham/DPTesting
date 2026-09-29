import { useContext } from "react";
import { PassingValue } from "../../App";
import Card from "../../Components/Card/Card";

import "./Furniture.css"
import "../../Global/CSS/CardContainer.css"

const Furniture = ()=> {
    const products = useContext(PassingValue);

    const product = products.filter(item=>item.category==="furniture");

    return (
        <div>
            <div className="cardcontainer">
                {product.map((item)=><Card key={item.id} {...item}/>)}
            </div>
        </div>
    );
}

export default Furniture;