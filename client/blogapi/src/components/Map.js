
//gmaps
import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const Map = ({locationArray}) => {
    const [ myMap, setMyMap ] = useState(null);
    const [ center, setCenter ] = useState({ lat: 51.50032327759917, lng: -0.12867958445367034 });
  
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    });

    useEffect(() => {
        if (locationArray.length > 0) {
            setCenter({ lat: locationArray[0].coords.lat, lng: locationArray[0].coords.lng });
        }
    }, [locationArray]);

  
    const renderMap = () => (
        <>
          <GoogleMap
            mapContainerStyle={{
              height: "50vh",
              width: "50vw",
              margin: "20px",
            }}
            zoom={12}
            center={center}
            onLoad={map => setMyMap(map)}
            onClick={(e)=> console.log(e.latLng.toJSON())}

          >
          {locationArray ? (locationArray.map((marker, i) => {
              return(
                    <Marker
                        key={i}
                        position={marker.coords}
                    />
              )
             
          })):null}
          </GoogleMap>
          </>
    )
  
    return isLoaded ? renderMap() : null;
  }
  
  export default Map
