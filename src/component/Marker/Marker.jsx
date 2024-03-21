import { GoogleMapMarker } from '@react-google-maps/api'
import React from 'react'
const Marker = ({position}) => {
  return (
<GoogleMapMarker position={position}></GoogleMapMarker>
  )
}

export default Marker