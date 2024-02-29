import "./ProductCard.css"

const ProductCard = ({product}) => {
    return <div className="product-card">
        <div className="product-card-image">
            <img src={product.image} alt="item"/>
        </div>
        <div className="product-card-body">
            <div className="product-card-body-title">
                <div>{product.name}</div>
                <div>{product.price} $</div>
            </div>
            <div className="product-card-body-description">
                {product.description}
            </div>
            <div className="product-card-body-tags">
                <div className="product-card-body-tags-tag">{product.material}</div>
            </div>
        </div>
    </div>
}

export default ProductCard;

