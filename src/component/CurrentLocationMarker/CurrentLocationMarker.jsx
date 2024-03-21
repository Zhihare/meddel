import { Marker } from '@react-google-maps/api'
import React from 'react'
// import { RiUserLocationLine } from "react-icons/ri";
//  const icon = {
//     url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', // URL зображення маркера
//     scaledSize: new window.google.maps.Size(50, 50), // Розмір маркера
//   };

export const CurrentLocationMarker = ({position}) => {
  return (
    <Marker position={position}/>
  )
}
