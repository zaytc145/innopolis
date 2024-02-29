import {useSelector} from "react-redux";
import ProductCard from "./ProductCard";

const ProductsList = () => {
    const products = useSelector(state => state.products);

    return (
        <div className="products-list" style={{display: "flex", flexWrap: "wrap", gap: 15}}>
            {
                products.map(product => (
                    <ProductCard product={product} key={product.id}/>
                ))
            }
        </div>
    );
}

export default ProductsList