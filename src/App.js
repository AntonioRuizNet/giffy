import React from 'react';
import {useParams} from "react-router-dom";

import Gif from './components/Gif'
import Search from './components/Search'
import useGifs from './hooks/useGifs';

import './App.css';

function App() {
  let { keyword } = useParams();
  const {gifs} = useGifs({keyword});

  return (
    <div className="App">
      <section> <Search /> </section>
      <section className="App-content">
        { gifs.data.map((i) => 
            <Gif  key={i.id} 
                  url={i.images.downsized_medium.url} 
                  title={i.title}/>
        ) }
      </section>
    </div>
  );
}

export default App;
