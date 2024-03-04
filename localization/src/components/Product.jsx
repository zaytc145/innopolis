import "./Product.css"
import {useMemo} from "react";
import {uniqueId} from "lodash/util";

const Product = ({product}) => {
    const id = useMemo(() => {
        return uniqueId('product-')
    }, [])


    return <div className="product" id={id}>{product.name}</div>
}

export default Product