import { Link } from "react-router-dom";
import "./Sidebar.css"

function Sidebar(){
    return (
        <div className="sidebar">
            <div className="title">
                <div className="logo"></div>
                <div className="name"><h1>Adham Organic Shop</h1></div>
            </div>

            <Link to="/">Home</Link>
            <Link to="/all">All</Link>
            <Link to="/vegetables">Vegetables</Link>
            <Link to="/fruits">Fruits</Link>
            <Link to="/greens">Greens</Link>
            <Link to="/meat">Meat</Link>
        </div>
    );
}

export default Sidebar;