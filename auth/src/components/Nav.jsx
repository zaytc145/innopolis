import "./Nav.css";
import {Link} from 'react-router-dom';
import {LOGIN, PRODUCTS, REGISTER} from "../routes/routerLinks";
import useAuth from "../providers/AuthProvider/useAuth";
import {Fragment} from "react";

const Nav = () => {
    const {user} = useAuth();

    return <div className="nav">
        {user &&
            <Link to={PRODUCTS}>Products</Link>
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