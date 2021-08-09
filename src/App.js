import React, { useState, useEffect } from 'react';

import getGifs from './services/Api'
import './App.css';

function App() {

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword: 'f1' }).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.data.map((i) =>
            <img src={i.images.downsized_medium.url} />
          )}
      </section>
    </div>
  );
}

export default App;
