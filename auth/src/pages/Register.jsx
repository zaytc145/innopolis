import {useCallback} from "react";
import useAuth from "../providers/AuthProvider/useAuth";
import {PRODUCTS} from "../routes/routerLinks";
import {useNavigate} from "react-router-dom";

const Register = () => {

    const {login} = useAuth();
    const navigate = useNavigate();
    const onSubmit = useCallback(async (e) => {
        e.preventDefault();
        const response = await fetch('https://65e0f9a9d3db23f7624a5791.mockapi.io/users')
        const users = await response.json();
        login(users[0]);
        navigate(PRODUCTS)
    }, []);

    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Email</label>
                <input type="email" required/>
            </div>
            <div className="form-group">
                <label>Name</label>
                <input type="text" required/>
            </div>
            <div className="form-group">
                <label>password</label>
                <input type="password" required/>
            </div>
            <div className="form-group">
                <label>password confirmation</label>
                <input type="password" required/>
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
}

export default Register;