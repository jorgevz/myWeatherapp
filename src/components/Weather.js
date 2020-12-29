import React from 'react';
import axios from 'axios';


export default class Weather extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          weather: [],
        
       }
    }



async componentDidMount(){
  
axios.get(`http://api.weatherapi.com/v1/current.json?key=b61abddeaf714b5bba9210052201012&q=nyc`).then
( res => {
   
   this.setState ({weather: [res.data] })
    
    console.log(this.state.weather)

        
});
}

  

  
  
 

render (){

return(
<div>
  
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

</div>



    


)
}
}