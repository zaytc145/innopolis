import './Card.css';

const Card = ({title, image, style}) => {

    return <div className="card" style={style}>
        {image &&
            <div className="card-image">
                {image}
            </div>}
        <div className="card-body">
            {title && <div className="card-body-title">
                {title}
            </div>}
        </div>
    </div>
}

export default Card;

