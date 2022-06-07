
//gmaps
import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const Map = ({locationArray}) => {
    const [ myMap, setMyMap ] = useState(null);
    const [ center, setCenter ] = useState({ lat: 51.50032327759917, lng: -0.12867958445367034 });
    const [ id, setId ] = useState(0);
    const [ markers, setMarkers ] = useState([]);
    const [ drawMarker, setDrawMarker ] = useState(false);
    const [selectedMarker, setSelectedMarker] = useState(null);
  
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    });


    const addMarker = (coords) => {
        setId((id)=>id+1);
        setMarkers((markers) => markers.concat([{coords, id}]) )
      }
  
    const renderMap = () => (
        <>
          <GoogleMap
            mapContainerStyle={{
              height: "50vh",
              width: "50vw",
              margin: "20px",
            }}
            zoom={10}
            center={center}
            onLoad={map => setMyMap(map)}
            onClick={(e)=> console.log(e.latLng.toJSON())}

          >
          {locationArray ? (locationArray.map((marker, i) => {
              return(
                    <Marker
                        key={i}
                        position={marker.coords}
                        onClick={() => {
                          setSelectedMarker(marker); 
                        }}
                    />
              )
             
          })):null}

          {selectedMarker && (
            <InfoWindow
              position = {
                selectedMarker.coords
              }
              onCloseClick={() => {
                setSelectedMarker(null);
              }}
              >
                <div>{selectedMarker.title}</div>
              </InfoWindow>

          
          )}
          </GoogleMap>
          <button
        type="button"
        style={{backgroundColor: drawMarker ? "green" : null}}
        onClick={()=>{setDrawMarker(()=>!drawMarker)}}
      >ADD & DRAG</button>
      <button
        type="button"
        onClick={()=>setMarkers([])}
      >CLEAR MAP</button>
          </>
    )
  
    return isLoaded ? renderMap() : null;
  }
  
  export default Map
