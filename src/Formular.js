import React, { useState } from 'react';

function Formular({funkciaPreZmenuDatRodica}){

  const [textovePole, zmenTextovePole] = useState("");

  console.log(funkciaPreZmenuDatRodica);

  return (
    <div>
      <input type="text" value={textovePole} onChange={(e)=>{

        zmenTextovePole(e.target.value);

      }}/>
      <button onClick={()=>{
          funkciaPreZmenuDatRodica((data) => {
            return data.concat(textovePole);
          })
        }}>Posli formular</button>
    </div>
  );

}

export default Formular;