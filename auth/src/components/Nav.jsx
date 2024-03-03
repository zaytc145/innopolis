import "./Nav.css";
import {Link, useNavigate} from 'react-router-dom';
import {LOGIN, PRODUCTS, REGISTER} from "../routes/routerLinks";
import useAuth from "../providers/AuthProvider/useAuth";
import {Fragment, useCallback} from "react";

const Nav = () => {
    const {user, logout} = useAuth();
    const navigate = useNavigate();

    const onLogout = useCallback(() => {
        logout();
    }, []);

    return <div className="nav">
        {user &&
            <>
                <Link to={PRODUCTS}>Products</Link>
                <Link onClick={onLogout}>Logout</Link>
            </>
        }
        {
            !user &&
            <>
                <Link to={LOGIN}>Login</Link>
                <Link to={REGISTER}>Register</Link>
            </>
        }
    </div>
}

export default Nav;