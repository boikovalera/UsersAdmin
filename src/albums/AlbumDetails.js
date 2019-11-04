import React, {useState, useEffect} from 'react'
import PhotoDetals from './PhotoDetals'
import config from '../config';

export default function AlbumDetails({albumId}) {

    const [photos, setPhoto] = useState([]);
    
    useEffect(() => {
        console.log(`${config.photoUrl}?albumId=${albumId}`)
        fetch(`${config.photoUrl}?albumId=${albumId}`)
            .then(res => res.json())
            .then(setPhoto)
    }, [])

    return (
        <div>
        {
            photos.map(photo => (
                <PhotoDetals
                    key={photo.id} 
                    photo={photo} />
            ))
        }   
        </div>     
    )
}
