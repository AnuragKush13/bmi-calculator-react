import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [height, setHeight] = useState('');
  const [weight,setWeight] = useState('');
  const [bmi,setBmi] = useState('');
  const [category,setCategory] = useState('');

  let calcBMI=()=>{
    if(height === 0 || weight === 0 ||height === '' || weight === ''  )
    alert("Please enter values!");
  else
    setBmi((weight/(height*height)*10000).toFixed(1));

  }

  const resetBtn=()=>{
    window.location.reload();
  }

  useEffect(()=>{
    
    
    if(bmi<18.5)
    setCategory("Underweight");
  else if(bmi >= 18.5 && bmi <=24.9)
  setCategory("Normal");
  else if( bmi > 24.9 && bmi<=29.9)
  setCategory("Overweight");
else if(bmi>29.9)
setCategory("Obesity");
  })
 

  return (
    <div className="App">
      <div className ="container" >
        <h3>Calculate you BMI</h3>
      <p>Weight</p>
        <input value={weight} onChange={(e)=>setWeight(e.target.value)} placeholder ="Enter weight in kg"></input>
        
        <p>Height</p>
        <input value={height} onChange={(e)=>setHeight(e.target.value)} placeholder ="Enter height in cmtrs"></input>
        <button className="calcBMI" onClick={calcBMI}> Calculate </button>
        <button className="resetBtn" onClick={resetBtn}> Reset </button>
        <p>{bmi} kg/m<sup>2</sup></p>
        <p>{category}</p>
      </div>
    </div>
  );
}

export default App;
