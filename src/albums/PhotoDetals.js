import React from 'react'
import './Albums.css'

export default function PhotoDetals({photo}) {
    return (
        <div className="photo-detals">
            <div className="photo-detals-title">
                <span>{photo.title}</span>                    
            </div>        

            <div className="photo-detals-img">
                <img src={photo.thumbnailUrl} alt={photo.title}></img>
            </div>
        </div>
    )    
}
