import { TileLayer , MapContainer,Marker,Popup } from "react-leaflet"
import L from "leaflet"

import "leaflet/dist/leaflet.css";

export default function Map() {
  const svgIcon=L.icon({
    iconUrl:'data:image/svg+xml;base64,' + btoa(`<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="#000000" stroke-width="1.5"></path><path d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z" fill="#000000" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`),
    iconSize:[24,24],
  })
  return (
    <MapContainer center={[0,0]} zoom={ 2 } scrollWheelZoom={false}>

    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker icon={svgIcon} position={[34.0522, -118.2437]}>
    <Popup>
    	
    </Popup>
</Marker>
  </MapContainer>
  )
}