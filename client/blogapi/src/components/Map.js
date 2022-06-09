import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const Map = ({ locationArray }) => {
  const [myMap, setMyMap] = useState(null);
  const [center, setCenter] = useState({
    lat: 51.50032327759917,
    lng: -0.12867958445367034,
  });
  const [id, setId] = useState(0);
  const [markers, setMarkers] = useState([]);
  const [drawMarker, setDrawMarker] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  });

  useEffect(() => {
    if (locationArray.length > 0) {
      setCenter({
        lat: locationArray[0].coords.lat,
        lng: locationArray[0].coords.lng,
      });
    }
  }, [locationArray]);

  const renderMap = () => (
    <>
      <GoogleMap
        mapContainerStyle={{
          height: "110vh",
          width: "50vw",
          marginLeft: "120px",
        }}
        zoom={12}
        center={center}
        onLoad={(map) => setMyMap(map)}
 
      >
        {locationArray
          ? locationArray.map((marker, i) => {
              return (
                <Marker
                  key={i}
                  position={marker.coords}
            
                />
              );
            })
          : null}

        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.coords}
            onCloseClick={() => {
              setSelectedMarker(null);
            }}
          >
            <div>{selectedMarker.title}</div>
          </InfoWindow>
        )}
      </GoogleMap>
    </>
  );

  return isLoaded ? renderMap() : null;
};

export default Map;
