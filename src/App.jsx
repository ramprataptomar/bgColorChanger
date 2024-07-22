import { useState } from 'react';
import './App.css'
import ColorPlate from './ColorPlate'
// import Form from './Form';

function App() {
  const colorData = [
    {
        id: 0,
        color: "Red"
    },
    {
        id: 1,
        color: "LightGreen"
    },
    {
        id: 2,
        color: "LightBlue"
    },
    {
        id: 3,
        color: "Olive"
    },
    {
        id: 4,
        color: "Grey"
    },
    
    {
        id: 5,
        color: "Yellow"
    },
    {
        id: 6,
        color: "Pink"
    },
    {
        id: 7,
        color: "Purple"
    },
    {
        id: 8,
        color: "Lavender"
    },
    {
        id: 9,
        color: "White"
    },
    {
        id: 10,
        color: "Black"
    }
  ]

  const [color, setColor] = useState("skyblue");

  function AppFun(color){
    setColor(color);
  }

  return (
    <div  className="screen" style={{backgroundColor: color}}>
      <ColorPlate colors={colorData} appFun={AppFun}/>
    </div>
    // <div className="screen">
    //     <Form/>
    // </div>
  )
}

export default App