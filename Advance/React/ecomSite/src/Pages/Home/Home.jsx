import { useSelector } from "react-redux";

const Home = ()=>{
    const email = useSelector((state)=>state.auth.user);
    const prod = useSelector((state)=>state.product.prod);

    console.log(prod);
    
    return (
        <div className="home">
            <h1>Welcome, {email}</h1>
        </div>
    );
}

export default Home;