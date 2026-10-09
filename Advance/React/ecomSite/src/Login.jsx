import { useDispatch, useSelector } from "react-redux";
import { login } from "./Slice/authSlice";

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
            <form onSubmit={handleLogin}>
                <label htmlFor="email">
                    Email
                </label>
                <input type="text" placeholder="Enter your email" name="email" required></input>
                <label htmlFor="password">
                    Password
                </label>
                <input type="password" placeholder="Enter your password" name="password" required></input>
                <button type="submit">Login </button>
            </form>
        </div>
    );
}

export default Login;