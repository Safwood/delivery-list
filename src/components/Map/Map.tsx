import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMapEvents } from 'react-leaflet'
import styles from './Map.module.css';
import { LatLngExpression, Map as LeafletMap } from 'leaflet';

type Props = {
  [key: string]: LatLngExpression,
}

const polyline: LatLngExpression[] = [
  [55.752886, 37.622917],
  [55.7551, 37.621],
  [55.7551, 37.6292],
]

const options = { color: 'lime' }

const Map: React.FC<Props> = ({ pointA, pointB }) => {
  const [map, setMap] = useState<LeafletMap | null>(null)

  const changePos = (pos: LatLngExpression) => {
    if (map) map.flyTo(pos);
 }

 useEffect(() => {
   const L = require("leaflet");
   delete L.Icon.Default.prototype._getIconUrl;

   L.Icon.Default.mergeOptions({
     iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
     iconUrl: require("leaflet/dist/images/marker-icon.png"),
     shadowUrl: require("leaflet/dist/images/marker-shadow.png")
   });
 }, []);

 useEffect(() => {
  changePos(pointA)
 }, [pointA, pointB]);
 
  return (
    <MapContainer 
    center={pointA} 
    zoom={11} 
    className={styles.leafletContainer}
    whenCreated={(map: LeafletMap) => setMap(map)}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={pointA}><Popup>Погрузка</Popup></Marker>
      <Marker position={pointB}><Popup>Разгрузка</Popup></Marker>
      <Polyline pathOptions={options} positions={polyline} />
    </MapContainer>
  );
}

export { Map };