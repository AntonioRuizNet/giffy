import React from 'react'

export default function Gif({url, title, key}) {
    return (
        <div key={key} className="bloque_gif">
            <p>{title}</p>
            <img className="img_gif"  src={url} />
        </div>
    )
}
