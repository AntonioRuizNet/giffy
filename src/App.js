import React, { useState, useEffect } from 'react';

import getGifs from './services/Api'
import Gif from './components/Gif'
import Search from './components/Search'

import './App.css';

function App() {

  const [gifs, setGifs] = useState({"data":[]});

  useEffect(() => {
    getGifs({ keyword: 'f1' }).then(gifs => setGifs(gifs))
  }, []);

  const GetSearch = (e) => {
    if(e.target.value!=="")
      getGifs({ keyword: e.target.value }).then(gifs => setGifs(gifs))
    else
      getGifs({ keyword: 'f1' }).then(gifs => setGifs(gifs))
  }

  return (
    <div className="App">
      <section> <Search mySearch={GetSearch}/> </section>
      <section className="App-content">
        { gifs.data.map((i) => 
            <Gif key={i.id} url={i.images.downsized_medium.url} title={i.title}/>
          ) 
        }
      </section>
    </div>
  );
}

export default App;
