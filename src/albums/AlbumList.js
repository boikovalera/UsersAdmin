import React, {useState, useEffect} from 'react'
import './Albums'
import AmlbumListItem from './AlbumListItem'
import config from '../config';

export default function AlbumList() {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(config.albumUrl)
            .then(res => res.json())
            .then(setAlbums)
    }, [])

    return (
        <ul>
            {albums.map(album => (
                <AmlbumListItem 
                    key={album.id} 
                    album={album} />
            ))}
        </ul>
    )
}
