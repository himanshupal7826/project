
import React from "react";
import {useState,useEffect} from "react";
import './weather.css';
 
 
 

function Weather({country}) {
  const today = new Date();
  const [apiData, setApiData] = useState({});
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=f0a4e216cd7c90bad05985b95a55c7c6`;

  // Side effect
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
       
  }, [apiUrl]);


  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const [temp, setTemp] = useState([]);
    
    // const [condition, setCondition] = useState([]);
  useEffect(() => {
    const getCountriesData = async () => {
     const url =`https://api.weatherapi.com/v1/current.json?key=f0be6a4067fe46e6993163005212911&q=$country&aqi=no`;
    //  const url =`api.openweathermap.org/data/2.5/weather?q=$country&appid=f0a4e216cd7c90bad05985b95a55c7c6`; 
     await fetch(url)
         .then((response) =>
         response.json())
         .then((data) => {
           
           
           setTemp([data.current.temp_c]);
          //  setCondition([data.current.condition]);
           
        }
         
        )
        ;

    };
    getCountriesData();
  }, []);
    return (
    <div><h1>Climate</h1> 
        <div className="wea">
           
          <p> {date}</p>
             
             
           <h3> {country}</h3>
           <br/>
           <div className="te"> 
           {apiData.main ? ( 
           <img
                src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
              />):(<h1>Loading</h1>)}
 
           <h2> {temp}<sup>°</sup>C</h2> </div>
              
        </div>
         
        </div>
    );
}

export default Weather;