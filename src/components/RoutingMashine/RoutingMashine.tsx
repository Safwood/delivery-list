import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { requestsSelector } from '../../redux/requests/requestsSelectors';
import { useSelector } from 'react-redux';

const L = require('leaflet');

const Routing = () => {
  const { activeRequest, requests } = useSelector(requestsSelector);
  const currentRoute = (requests.find(request => request.key === activeRequest))?.route;
  const pointA = currentRoute?.loading;
  const pointB = currentRoute?.unloading;
  
  const createRoutineMachineLayer = () => {
    const instance = L.Routing.control({
      waypoints: [
        L.latLng(pointA),
        L.latLng(pointB)
      ],
      lineOptions: {
        styles: [{ color: "#6FA1EC", weight: 4 }]
      },
      draggableWaypoints: false,
      autoRoute: true,
    });
  
    return instance;
  };
  const RoutingMachine = createControlComponent(createRoutineMachineLayer);

  return <RoutingMachine />
}

export { Routing };