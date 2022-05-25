import React, { useState } from 'react';
import Formular from './Formular';

function App() {

  const [data, zmenData] = useState(["data na zaciatku"]);

  console.log("Rodic", data);

  return (
    <>
      {data.map(element => <p>{element}</p>)}
      <Formular funkciaPreZmenuDatRodica={zmenData}/>
    </>
  );
  
}

export default App;
