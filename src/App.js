import './App.css';
import React, { useState } from 'react';
import ufrgs from './ufrgs.png'; // Tell webpack this JS file uses this image
import GaugeChart from 'react-gauge-chart'
import FormControl from '@mui/material/FormControl';
import { InputLabel, FilledInput, Button } from '@mui/material';
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
  <body>
    <img className="logoUfrgs" src={ufrgs} alt={"UFRGS logo"}/>

<form>
  <FormControl variant="filled">
  <InputLabel htmlFor="component-filled">Nota A</InputLabel>
  <FilledInput id="component-filled" defaultValue="Composed TextField" 
  value={numA}
  onChange={event => handleChange(event, 'A')}/>
  </FormControl>

  <FormControl variant="filled">
  <InputLabel htmlFor="component-filled">Nota B</InputLabel>
    <FilledInput id="component-filled" defaultValue="Composed TextField"
    value={numB}
    onChange={event => handleChange(event, 'B')}/>
  </FormControl>

  <FormControl variant="filled">
  <InputLabel htmlFor="component-filled">Nota C</InputLabel>

    <FilledInput id="component-filled" defaultValue="Composed TextField"
    value={numC}
    onChange={event => handleChange(event, 'C')}/>
  </FormControl>

  <FormControl variant="filled">
  <InputLabel htmlFor="component-filled">Nota D</InputLabel>

    <FilledInput id="component-filled" defaultValue="Composed TextField"
    value={numD}
    onChange={event => handleChange(event, 'D')}/>
  </FormControl>

  <FormControl variant="filled">
  <InputLabel htmlFor="component-filled">Nota FF</InputLabel>

    <FilledInput id="component-filled" defaultValue="Composed TextField"
    value={numF}
    onChange={event => handleChange(event, 'FF')}/>
</FormControl>


    
  <div>
  {numA}A + {numB}B + {numC}C + {numD}D + {numF}FF = {indice3.toFixed(2)}

  </div>

  <GaugeChart id="gauge-chart1" 
    nrOfLevels={5}
    arcPadding={0.1}
    cornerRadius={3}
    textColor="#AAAAA"
    percent={indice3/10}/>

<Button variant='outlined' onClick={cleanField}>Clear</Button>
</form>

 </body>
  </>


   
  )

}

export default App;
