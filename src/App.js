import './App.css';
import Weather from './subfiles/weather';
import {useState,useEffect} from "react"; 
import Map from './subfiles/Map';
import Exchange from './subfiles/exchange';
 

function App() {
  const [country, setCountry] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]); 
    
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch(" https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708")
        .then((response) => response.json())
        .then((data) => {
            setCountry(data.country_name);
            setLat(data.latitude);
            setLon(data.longitude);
             
             
        });

    };
    getCountriesData();
  }, []);
   
  return (
    <div className="App">
      
       <Weather country={country}  ></Weather>
        
       <div className="Map">  
       <Map   lat={lat} lon={lon}></Map> 
       </div>
        
         <Exchange/>
       
    </div>
  );
}

export default App;
