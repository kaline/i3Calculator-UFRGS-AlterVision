import './App.css';
import React, { useState } from 'react';
import ufrgs from './ufrgs.png'; // Tell webpack this JS file uses this image
import GaugeChart from 'react-gauge-chart'

function App() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [numC, setNumC] = useState(0);
  const [numD, setNumD] = useState(0);
  const [numF, setNumF] = useState(0);

  let indice3 =  ((numF + numD + numC + numB + numA)/(numF + (((1/3)*numD) + ((1/6)*numC) + ((1/8)*numB) + ((1/10)*numA))));

  const handleChange = (event, fieldName) => {
    const result = event.target.value.replace(/\D/g, '');
  
    switch (fieldName) {
      case 'A':
        setNumA(parseInt(result, 10));
        break;
      case 'B':
        setNumB(parseInt(result, 10));
        break;
      case 'C':
        setNumC(parseInt(result, 10));
        break;
      case 'D':
        setNumD(parseInt(result, 10));
        break;
      case 'FF':
        setNumF(parseInt(result, 10));
        break;
      default:
        break;
    }
  };

  const cleanField = () =>{
    setNumA('');
    setNumB('');
    setNumC('');
    setNumD('');
    setNumF('');

  }
  

  return(
  <>
  <form>
  <img className="logoUfrgs" src={ufrgs} alt={"UFRGS logo"}/>

  <input
  type="text"
  name="A"
  value={numA}
  onChange={event => handleChange(event, 'A')}
/>

 
    <br></br>

    <input 
   type="text"
   name="B"  
   value={numB} 
   onChange={event => handleChange(event, 'B') }/>
    <br></br>

    <input 
   type="text"
   name="C"  
   value={numC} 
   onChange={event => handleChange(event, 'C') } />
    <br></br>

    <input 
   type="text"
   name="D"  
   value={numD} 
   onChange={event => handleChange(event, 'D') } />
    <br></br>

    <input 
   type="text"
   name="FF"  
   value={numF} 
   onChange={event => handleChange(event, 'FF') } />
  <br/>
  <div>
  {numA}A + {numB}B + {numC}C + {numD}D + {numF}FF = {indice3.toFixed(2)}

  </div>

  <GaugeChart id="gauge-chart1" 
    nrOfLevels={5}
    arcPadding={0.1}
    cornerRadius={3}
    textColor="#AAAAA"
    percent={indice3/10}/>

<button onClick={cleanField}>Clear</button>

  </form>
     </>

   
  )

}

export default App;
