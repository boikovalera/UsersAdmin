import React from 'react'
import PropTypes from '../propTypes';
import {Link, useRouteMatch} from 'react-router-dom';

export default function AlbumListItem({album}) {

    const { url } = useRouteMatch();

    return (
        <li>
            <Link to={`${url}/${album.id}`}>{album.title}</Link>
        </li>
    )
}

AlbumListItem.prototype = {
    album: PropTypes.album.isRequired
}