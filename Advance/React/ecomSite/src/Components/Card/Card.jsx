import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./Card.css";
import { addtoCart } from "../../Slice/cartSlice";

const Card = ({product})=> {
    const dispatch = useDispatch();
    return (
        <div className="productCard">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title}/>
            </Link>
            <div className="productInfo">
                <p className="categoryName">{product.category}</p>
                <Link to={`/product/${product.id}`}>
                    <h3>{product.title}</h3>
                </Link>
                <div className="productBottom">
                    <h3>${product.price.toFixed(2)}</h3>
                    <button onClick={()=>
                        dispatch(addtoCart(product))
                    }>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Card;