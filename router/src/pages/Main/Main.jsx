import './Main.css';
import {useCallback, useEffect, useState} from "react";
import Card from "../../components/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

function Main() {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchPhotos = useCallback(async () => {
        setIsLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
        const photos = await response.json();
        setPhotos(photos);
        setIsLoading(false);
    }, [])

    useEffect(() => {
        fetchPhotos();
    }, [fetchPhotos])


    return (
        <div className="cards-list">
            {
                isLoading ? <FontAwesomeIcon icon={faCircleNotch} size="2xl" spin/> :
                    photos.map(photo => <Card
                        title={<Link to={`/${photo.id}`}>{photo.title}</Link>}
                        image={<img src={photo.url} alt="item"/>}
                        key={photo.id}/>)
            }
        </div>
    );


}

export default Main;
