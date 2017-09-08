import React from "react";

class Weather extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      city: "",
      temperature: ""
    };

    this.getWeather();
  }

  render () {
    return (
      <div>
        <h1>Weather</h1>
        <h6>City:{this.state.city}</h6>
        <h6>Temperature:{Math.round(this.state.temperature * (9/5) - 459.67)}</h6>
      </div>
    );
  }

  getWeather() {
    const fn = this;

    navigator.geolocation.getCurrentPosition(function(pos) {
      const weatherRequest = new XMLHttpRequest();

      weatherRequest.addEventListener("load", (response)  => {
        fn.setState({
          city: JSON.parse(weatherRequest.responseText).name,
          temperature: JSON.parse(weatherRequest.responseText).main.temp});
      });

      weatherRequest.open("GET",
        `http://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&APPID=9e10e62732b3e1db6c5e879a13208af7`);
      weatherRequest.send();

    });
  }
}

export default Weather;
