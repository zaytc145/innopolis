import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {LOGIN, PRODUCTS, REGISTER} from "./routerLinks";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Register from "../pages/Register";
import Default from "../layouts/Default";
import useAuth from "../providers/AuthProvider/useAuth";


const WrapAuth = ({children}) => {
    const {user} = useAuth();

    if (!user) {
        return <Navigate to={LOGIN}/>
    }

    return children;
}

const MainRoutes = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<Default/>}>
                <Route path={PRODUCTS} element={
                    <WrapAuth>
                        <Products/>
                    </WrapAuth>
                }/>
                <Route path={LOGIN} element={<Login/>}/>
                <Route path={REGISTER} element={<Register/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
}

export default MainRoutes