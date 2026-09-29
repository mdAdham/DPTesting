import { useContext } from "react";
import { PassingValue } from "../../App";
import Card from "../../Components/Card/Card"

import "./Beauty.css"
import "../../Global/CSS/CardContainer.css"

const Beauty = ()=>{

    const products = useContext(PassingValue);

    const product = products.filter(item=>item.category==="beauty");

    return (
        <div>
            <div className="cardcontainer">
                {product.map((item)=><Card key={item.id} {...item}/>)}
            </div>
        </div>
    );
}

export default Beauty;