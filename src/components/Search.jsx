import React from 'react'
import { useHistory } from "react-router-dom";

export default function Gif({mySearch}) {

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        let search = document.getElementById('search').value;
        history.push("/"+search);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="search" name="search" className="Search" placeholder="F1" />
            </form>
        </div>
    )
}
