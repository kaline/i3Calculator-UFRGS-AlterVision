import './App.css';
import React, { useState } from 'react';
import InputNumber from 'react-input-number';

function App() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [numC, setNumC] = useState(0);
  const [numD, setNumD] = useState(0);
  const [numE, setNumE] = useState(0);
  const [numF, setNumF] = useState(0);

  let indice3 =  (numA*10 + numB*8 + numC*6 + numD*3 + numF*1)/5;

 

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
    value={numE} 
    onChange={setNumE} 
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
      {indice3}({typeof indice3})
    </div>
  </>
   
  )

}

export default App;
