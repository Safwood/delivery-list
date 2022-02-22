import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import styles from './Map.module.css';
import { LatLngExpression, Map as LeafletMap } from 'leaflet';
import { RoutingMachine } from '../RoutingMashine'

type Props = {
  [key: string]: LatLngExpression,
}

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
      <RoutingMachine />
    </MapContainer>
  );
}

export { Map };