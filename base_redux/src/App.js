import './App.css';
import {useDispatch} from "react-redux";
import ProductsList from "./components/ProductsList";
import {useEffect} from "react";
import {setProducts} from "./slices/productsSlice";
import products from "./data/products.json";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts(products));
    }, []);

    return (

        <ProductsList/>
    );
}

export default App;
