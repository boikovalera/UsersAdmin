import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom';

export default function AlbumListItem({album}) {

    const { url } = useRouteMatch();

    return (
        <li>
            <Link to={`${url}/${album.id}`}>{album.title}</Link>
        </li>
    )
}
