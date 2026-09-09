import "./Card1.css"

// function Card1(props){
//     return (
//         <div className="Card1">
//             <div className="cardImage">
//                 <img src={props.image}/>
//             </div>
//             <div className="prodDesc">
//                 <h2>{props.prodName}</h2>
//                 <h3>{props.prodPrice}</h3>
//                 <p>{props.description}</p>
//                 <button>Add to cart</button>
//             </div>
//         </div>
//     );
// }

function Card1({title, price, description, image}){
    return (
        <div className="Card1">
            <div className="cardImage">
                <img src={image}/>
            </div>
            <div className="prodDesc">
                <h2>{title}</h2>
                <h3>{price}</h3>
                <p>{description}</p>
                <button>Add to cart</button>
            </div>
        </div>
    );
}

export default Card1;