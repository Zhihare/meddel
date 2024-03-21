
import React, { useCallback, useRef } from 'react'
import { GoogleMap, Marker} from '@react-google-maps/api';
import { ButtonMap } from './Map.styled';
import { fetchAddress } from '../utils/geo';



const containerStyle = {
  width: '100%',
  height: '400px',
  marginBottom: '10px'
};

export const MODES = {
  MOVE: 0,
  SET_MARKER: 1,
}

const defoultOptions = {
    panControl: true,
    zommControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    rotateControl: false,
    fullscreenControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    disableDoubleClickZoom: false
}


function Map({ center, mode, onClickTogle, markers, onMarkerAdd, adressAdd }) {


    
    const mapRef = useRef(undefined);
    
    const onLoad = useCallback(function callback(map) {
        mapRef.current = map;
    }, [])

    const onUnmount = useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])

    
    const onClick = useCallback((loc) => {
        if (mode === MODES.SET_MARKER) {
            const lat = loc.latLng.lat();
            const lng = loc.latLng.lng();
            console.log({ lat, lng });
            onMarkerAdd({ lat, lng });
            const addressPromise = fetchAddress({ lat, lng });
            addressPromise.then(address => {
                console.log(address); // Отримано адресу
                adressAdd(address);
            })
        };
        }, [mode, onMarkerAdd, adressAdd]);

  return  (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
          onUnmount={onUnmount}
          options={defoultOptions}
          onClick={onClick}
      >
          {mode === MODES.SET_MARKER ? < Marker position={markers} /> : < Marker position={center} />}
          <ButtonMap onClick={onClickTogle}>Set Marker</ButtonMap>
          <ButtonMap className='clear'>Clear Marker</ButtonMap>
        <></>
      </GoogleMap>
  )
}


export default Map