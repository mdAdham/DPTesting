import "./Card.css"

const Card = ({title, description, category, price, brand, thumbnail})=> {

    const cardstyle = {
        backgroundImage: 'linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(' + thumbnail + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <div className="card" style={cardstyle}>
            <h1>{title}</h1>
            <h6>BRAND: <span className="brand">{brand}</span></h6>
            <p>{description}</p>
            <h5>CATEGORY: <span className="category">{category.toUpperCase()}</span></h5>
            <h3>${price}</h3>

            <button>Add to cart</button>
        </div>
    );
}

export default Card;