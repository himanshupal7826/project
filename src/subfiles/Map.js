import React from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// import { Loader } from "@googlemaps/js-api-loader";
function Map({lat,lon}){
const containerStyle = {
  width: '400px',
  height: '400px'
};

 

 
    const center = {
        lat: parseFloat(lat),
        lng: parseFloat(lon),
        
      };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:  "AIzaSyB4jkJshKVBW7wlwHPeU4wGSu3uc9QC-Xs",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, []);
   

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, []);

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
         
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
       
  ) : <></>
}

export default React.memo(Map)

// function Map({lat,lon}){
//     const center = {
//                  lat: lat,
//                  lng: lon,
//               };
// const loader = new Loader({
//     apiKey: "AIzaSyB4jkJshKVBW7wlwHPeU4wGSu3uc9QC-Xs",
     
     
//   });
  
//   loader.load().then(() => {
//     map = new google.maps.Map(document.getElementById("map"), {
//       center: {center},
//       zoom: 8,
//     });
//   });
// }
// export default Map;


 