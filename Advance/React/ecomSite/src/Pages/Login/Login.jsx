import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Slice/authSlice";
import "./Login.css"

const Login = ()=>{
    const dispatch = useDispatch();
    const error = useSelector((state)=>state.auth.error);
    const handleLogin = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        dispatch(
            login({
                email:form.get("email"),
                password:form.get("password")
            })
        )
    };

    return (
        <div className="Login">
            <form onSubmit={handleLogin} className="LoginForm">
                <div className="email">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="text" placeholder="Enter your email" name="email" required autoComplete="off"></input>
                </div>
                <div className="password">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" placeholder="Enter your password" name="password" required autoComplete="off"></input>
                </div>
                <button type="submit">Login </button>
            </form>
        </div>
    );
}

export default Login;