import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addtoCart } from "../../Slice/cartSlice";

import "./ProductDetails.css"

const ProductDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {prods, loading, error} = useSelector((state)=>state.products);
    const prod = prods.find((item)=>item.id===Number(id));

    if (loading){
        return <h2>...Loading Product</h2>
    }
    if (error) {
        return <h2>{error}</h2>
    }
    if (!prod){
        return <h2>No Product Found</h2>
    }
  return (
    <div className="ProductDetails">
      <div className="detailsImage">
        <img src={prod.image} />
      </div>
      <div className="detailsContent">
        <h1>{prod.title}</h1>
        <h2>{prod.price.toFixed(2)}</h2>
        <p>{prod.description}</p>
        <button onClick={()=>dispatch(addtoCart(prod))}>
            Add to Cart
        </button>
        <Link to='/' className='backLink'>Back to Products </Link>
      </div>
    </div>
  );
}

export default ProductDetails;