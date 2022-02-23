import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import styles from './Map.module.css';
import { LatLngExpression, Map as LeafletMap } from 'leaflet';
import { requestsSelector } from '../../redux/requests/requestsSelectors';
import { useSelector } from 'react-redux';
import "leaflet-routing-machine";
import { Routing } from '../RoutingMachine';
import { Request } from '../../types';

const L = require('leaflet');
delete L.Icon.Default.prototype._getIconUrl;
    
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

const Map: React.FC = () => {
  const [map, setMap] = useState<LeafletMap | null>(null);
  const { activeRequest, requests } = useSelector(requestsSelector);
  const currentRoute = (requests.find((request: Request) => request.key === activeRequest))?.route;
  let pointA = currentRoute?.loading;

  const flyTo = (pos: LatLngExpression) => {
    if (map) map.flyTo(pos);
  }
  
  useEffect(() => {
    if(pointA) flyTo(pointA);
    
  }, [requests, activeRequest]);
 
  return (
    <MapContainer 
      center={pointA || [55.776882, 37.581352]} 
      zoom={11}
      className={styles.leafletContainer}
      whenCreated={(map: LeafletMap) => setMap(map)}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {map && <Routing />}
    </MapContainer>
  );
}

export { Map };