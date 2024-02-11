import './Card.css';

const Card = ({photo}) => {

    return <div className="card">
        <div className="card-image">
            <img src={photo.url} alt="item"/>
        </div>
        <div className="card-body">
            <div className="card-body-title">
                <div>{photo.title}</div>
            </div>
        </div>
    </div>
}

export default Card;