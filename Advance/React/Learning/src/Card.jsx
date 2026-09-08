function Card(props){
    return (
        <div className="card" style={{border:"1px solid grey", padding:"15px", borderRadius:"15px",
            marginTop:"15px"
        }}>
            <div className="icon"></div>
            <div className="plan-details">
                <h1>{props.plan}</h1>
                <h1>{props.price}</h1>
                <p>Build annually</p>
            </div>
            <div className="plan-benefits">
                <p>{props.ben1}</p>
                <p>{props.ben2}</p>
            </div>
            <div className="btn">
                <button className="button" style={{backgroundColor:props.btncolor,
                    color:props.textcolor}}>Get Started</button>
            </div>
        </div>
    );
}

export default Card;