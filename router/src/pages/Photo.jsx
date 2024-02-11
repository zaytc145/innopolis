import {useCallback, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Card from "../components/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";

const Photo = (props) => {
    const {id} = useParams();

    const [photo, setPhoto] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchPhoto = useCallback(async () => {
        setIsLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/photos/' + id);
        const photo = await response.json();
        setPhoto(photo);
        setIsLoading(false);
    }, [id])

    useEffect(() => {
        fetchPhoto();
    }, [fetchPhoto])


    return <div>
        <div>
            <Link to={"/"}>Назад</Link>
        </div>
        {
            isLoading ? <FontAwesomeIcon icon={faCircleNotch} size="2xl" spin/> :
                photo && <Card
                    style={{
                        display: 'inline-block',
                    }}
                    title={photo.title}
                    image={<img src={photo.url} alt="item"/>}
                />
        }
    </div>
}

export default Photo;