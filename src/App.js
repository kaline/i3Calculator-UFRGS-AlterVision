import './App.css';
import React, { useState } from 'react';
import InputNumber from 'react-input-number';

function App() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [numC, setNumC] = useState(0);
  const [numD, setNumD] = useState(0);
  const [numF, setNumF] = useState(0);

  let indice3 =  ((numF + numD + numC + numB + numA)/(numF + (((1/3)*numD) + ((1/6)*numC) + ((1/8)*numB) + ((1/10)*numA))));

 

  return(
  <>
    <InputNumber 
    min={10} 
    max={100} 
    step={0.03} 
    value={numA} 
    onChange={setNumA} 
    />
    <br></br>

    <InputNumber 
    min={10} 
    max={100} 
    step={0.03} 
    value={numB} 
    onChange={setNumB} 
    />
    <br></br>

    <InputNumber 
    min={10} 
    max={100} 
    step={0.03} 
    value={numC} 
    onChange={setNumC} 
    />
    <br></br>

    <InputNumber 
    min={10} 
    max={100} 
    step={0.03} 
    value={numD} 
    onChange={setNumD} 
    />
    <br></br>

    <InputNumber 
    min={10} 
    max={100} 
    step={0.03} 
    value={numF} 
    onChange={setNumF}
    />
    <div>
      {numA}({typeof numA})
    </div>
    <div>
      {numB}({typeof numB})
    </div>
    <div>
      {numC}({typeof numC})
    </div>
    <div>
      {numD}({typeof numD})
    </div>
    <div>
      {numF}({typeof numF})
    </div>

    <div>
      {indice3.toFixed(2)}({typeof indice3})
    </div>
  </>
   
  )

}

export default App;
