import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [city,setCity]=useState('')
  let [wData,setwData]=useState()
  let getData=(event)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a1d246c8ec39df999bd6733d0059d1ee&units=metric`)
    .then((response)=>response.json())
    .then((finallRespone)=>{
      console.log(finallRespone)
      if(finallRespone.cod==404){
        console.log(finallRespone.cod)
        setwData()
      }else{
        setwData(finallRespone)
      }
    })
    event.preventDefault()
    console.log(city)
    setCity("")
  }
  return (
    <div className="App">
      <h1>Simple weather App</h1>
      <div className="in">
        <form onSubmit={getData}>
        <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} />
        <button>sumbit</button>
        </form>
      </div>
      <div className="weatherBox">
      {wData
      ?
      <>
      <h2 className="city">{wData.name} {wData.sys.country}</h2>
      <h2 className="temp">{Math.round( wData.main.temp)}</h2>
      <img src={`https://openweathermap.org/img/w/${wData.weather[0].icon}.png`} className="wimg"/>
      <p>{wData.weather[0].description}</p>
      </>
      :
      "No Data found"
    }
    </div>
      
    </div>
  );
}

export default App;
