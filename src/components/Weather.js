import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Weather extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          weather: [],
          city: ''
          
        
       }
    }



handlenum1Change (event) {

  let city = (event.target.value);
  
  console.log(city)
  }
  

getWeather = async (e) => {
  e.preventDefault();
  
  const city = document.getElementById('city').value;

 axios.get(`http://api.weatherapi.com/v1/current.json?key=b61abddeaf714b5bba9210052201012&q=${city}`).then(
   res => {
    this.setState ({weather: [res.data] })
    console.log(this.state.weather)
   }
 );
  if (city === '') {
   alert("City Missing")
  }
  
 
}



render (){

return(
<div id='all' >
 
<form id='form' onSubmit={this.getWeather}>

<input
type='text' 
placeholder='City...'
id='city'
onChange={this.handlenum1Change}
/>

<br/>
<br/>

<Button className="btn-primary" variant='primary' type='submit'>Get Weather</Button>

  <br/>
  <br/>
  <h2>{this.state.weather.map(weather => (<div>
  {weather.location.name}
  <br/>
  {weather.location.country}
  <br/>
  {weather.current.temp_f} <span>°F</span>
  <br/>
  {weather.current.temp_c} <span>°C</span>
  <br/>
  <h2>{weather.current.condition.text}</h2>
  <br/>
  </div>))}</h2>
  </form>

</div>


)
}
}