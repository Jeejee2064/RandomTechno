'use client'
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";


const redIcon = L.icon({
 iconUrl: 'leaflet/marker-icon-2x-red.png',
 shadowUrl: 'leaflet/marker-shadow.png',
 iconSize: [25, 41],
 iconAnchor: [12, 41],
 shadowSize: [41, 41],
});
const position = [9.4055318, -82.2501111]; // specify the latitude and longitude here

const FootMap = () => (
    <div className="w-full md:w-1/2">

 <MapContainer center={position} zoom={12} style={{ height: "300px" }}>
   <TileLayer
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   />
   <Marker position={position} 
   icon={L.icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  })}>
     <Popup>
       El S Hotel Restaurante. <br /> Bluff Beach.
     </Popup>
   </Marker>
 </MapContainer>
 </div>
);

export default FootMap;
