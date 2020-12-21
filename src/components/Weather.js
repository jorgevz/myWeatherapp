import React from 'react';


export default class Weather extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          weather: [],

        }
    }



async componentDidMount(){

const url = "http://api.weatherapi.com/v1/current.json?key=b61abddeaf714b5bba9210052201012&q=nyc";
const res = await fetch(url);
const data = await res.json();
// placed ([{}]) instead of ({}) because is an array of objects
this.setState ([{ weather: data }]);
console.log(this.state)
    }
  

render (){
return(


<div>
<h3>Hello there</h3>
<input type='search'/>
{this.state.weather.map(weather => (
  

  <div>
  
  <h2>{weather.current.temp_f}</h2>
  <h4>{weather.location.name}</h4> 
  <h3>{weather.location.country}</h3>
  <input type='search' id='input'></input>
  <br/>


  </div>

))}
  </div>
)
}
}