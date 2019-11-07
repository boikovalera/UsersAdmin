import React from 'react'
import './App.css'

export default function Home() {
    return (
        <div className="home">
            <h1>Домашнее задание 5 </h1>
            <p>
                Расширить код с лекции. Добавить еще одну страницу с альбомами, при заходе в конкретный альбом, показывать фотографии из него.
            </p>
            <p>
                Дополнительное задание, реализовать полноценный CRUD через сервер
            </p>
            <p>
                <span>
                    API: 
                </span>
                <a href="https://jsonplaceholder.typicode.com/">
                    https://jsonplaceholder.typicode.com/
                </a>
            </p>
            <p>
                <span>
                    Код с лекции:
                </span> 
                <a href="https://github.com/agribanov/React-05.10.19-lection">
                    https://github.com/agribanov/React-05.10.19-lection
                </a> 
            </p>            
        </div>
    )
}