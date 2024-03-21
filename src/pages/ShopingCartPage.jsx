import React, { useCallback, useEffect, useState } from 'react'
import { ShopPageConteiner } from './ShopPage.styled'
import ShopingCartForm from '../component/ShopingCardForm/ShopingCartForm'
import Deliveri from '../component/Deliveri/Deliveri'
import { ToastContainer } from 'react-toastify'
import Map from '../component/Map/Map'
import { useJsApiLoader } from '@react-google-maps/api'
import { FormContainer } from './ShopingCartPage.styled'
import { MODES } from '../component/Map/Map'
import { getBrowserLocation } from '../component/utils/geo'


const KEY = process.env.REACT_APP_API_KEY;

  const defoultCenter = {
  lat: 50.45,
  lng: 30.60
};



const ShopingCartPage = () => {
  const [center, setCenter] = useState(defoultCenter);
  const [mode, setMode] = useState(MODES.MOVE);
  const [markers, setMarkers] = useState([]);
  const [adress, setAdress] = useState([]);
  

  const libraries = ['places'];
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: KEY,
    libraries
  })

  useEffect(() => {
    getBrowserLocation().then((curLoc) => {
      setCenter(curLoc);
    })
      .catch((defoultLocation) => {
        setCenter(defoultLocation)
      })
  },
    []);


  const onPlaceSelected = useCallback((coordinates) => {
    setCenter(coordinates);
  }, []);


  const handleTogleMode = useCallback(() => {
    switch (mode) {
      case MODES.MOVE:
        setMode(MODES.SET_MARKER);
        break;
      case MODES.SET_MARKER:
        setMode(MODES.MOVE);
        break;
      default:
        setMode(MODES.MOVE)
    }
  }, [mode]);


  const onMarkerAdd = useCallback((coordinate) => {
    setMarkers(coordinate);
  }, []);

  const adressAdd = useCallback((adress) => {
    setAdress(adress);
  }, []);

  

  return (
    <ShopPageConteiner>
      <FormContainer>
      {isLoaded ? <Map center={center} mode={mode} markers={markers} onClickTogle={()=>handleTogleMode()} onMarkerAdd={onMarkerAdd} adressAdd={adressAdd} />:<h2>Loader...</h2>}
        <ShopingCartForm adressInGeo={adress} onSelect={onPlaceSelected} />
        </FormContainer>
       <Deliveri/>
       <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light">
    </ToastContainer>
    </ShopPageConteiner>
  )
}

export default ShopingCartPage