import './App.css';
import {useCallback, useEffect, useState} from "react";
import Product from "./components/Product";
import {useSprings, animated} from "@react-spring/web";
import TranslationSelect from "./components/TranslationSelect";
import {useTranslation} from "react-i18next";

function App() {
    const [products, setProducts] = useState([]);
    const { t } = useTranslation();
    const getProducts = useCallback(async () => {
        const response = await fetch('https://65e0f9a9d3db23f7624a5791.mockapi.io/products');
        const data = await response.json();

        setProducts(data);
    }, []);

    useEffect(() => {
        getProducts()
    }, [getProducts])

    const [springs] = useSprings(products.length, (springIndex) => ({
        delay: springIndex * 40,
        config: {tension: 100},
        from: {opacity: 0}, to: {opacity: 1}
    }))

    return (<div className="App">
        <div>
            <TranslationSelect/>
        </div>

        <h1>{t('Products List')}</h1>

        {springs.map((productStyle, index) => {
            return <animated.div key={index} style={productStyle}>
                <Product product={products[index]} key={products[index].id}/>
            </animated.div>
        })}
    </div>);
}

export default App;
