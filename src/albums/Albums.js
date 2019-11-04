import React from 'react'
import './Albums.css'
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import AlbumList from './AlbumList'
import AlbumDetails from './AlbumDetails'

export default function Albums() {
    const { url } = useRouteMatch();

    return (
        <div>            
            <h2 style={{textAlign: 'center'}}>Album Module</h2>
            <Switch>
                <Route path={`${url}/:id`} render={({match}) => {
                    return <AlbumDetails albumId={match.params.id} />
                }} />
                <Route path={`${url}`} render={() => {
                    return <AlbumList/>
                }} />                
            </Switch>
        </div>
    )
}
