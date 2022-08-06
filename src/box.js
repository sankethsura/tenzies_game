import React from "react";
import './arrPush.css'


function Box(props) {
  const [starWarsData,setStarWarsData]=React.useState({})
  const [count,setCount] = React.useState(1)

  React.useEffect(()=>{
    console.log("running!!!")
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  },[count])
  
  function handleCount(){
    setCount(e=>{return e+1})
  }
  
  return (
    <div>
      
    </div>
  );
}

export default Box;
