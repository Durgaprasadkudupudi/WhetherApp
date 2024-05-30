import React, { useState } from 'react';

const App = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  const changeHandler = (e) => {
    setCity(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
      .then(response => response.json())
      .then(data => {
        const kelvin = data.main.temp;
        const celcius = kelvin - 273.15;
        setResult(`Temperature at ${city}: ${Math.round(celcius)}°C`);
      })
      .catch(error => console.log(error));
    setCity("");
  }

  return (
    <div className="app-container">
      <div className="background">
        <div className="sun"></div>
        <div className="moon"></div>
        <div className="cloud"></div>
        <div className="star" style={{top: '50%', left: '50%'}}></div>
        <div className="star" style={{top: '30%', left: '70%'}}></div>
        <div className="star" style={{top: '80%', left: '20%'}}></div>
      </div>
      <div className="content">
        <center>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Weather App</h4>
              <form onSubmit={submitHandler}>
                <div className="search-bar">
                  <input
                    size="30"
                    type="text"
                    name="city"
                    onChange={changeHandler}
                    value={city}
                    placeholder="Enter city name"
                  />
                  <button type="submit">
                    &#x1F50D;
                  </button>
                </div>
              </form><br /><br />
              <div className="result">
                <h1>{result}</h1>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}

export default App;
