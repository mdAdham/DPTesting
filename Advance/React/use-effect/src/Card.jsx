import "./Card.css"

function Card({id, title, category, image, price, rating}){
    return (
        <div className="card">
            <h2>{title}</h2>
            <h3>{category}</h3>
            <img src={image} alt="" className="image"/>
            <h5>{price}</h5>
            {/* <p>{rating}</p> */}
            <button>Add to Cart</button>
        </div>
    );
}

export default Card;