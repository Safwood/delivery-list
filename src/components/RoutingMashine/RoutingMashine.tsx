import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const L = require('leaflet');

const createRoutineMachineLayer = () => {
  const pointA = [55.793886, 37.622919]
  const pointB = [55.752888, 37.622915]

  const instance = L.Routing.control({
    waypoints: [
      L.latLng(...pointA),
      L.latLng(...pointB)
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

export { RoutingMachine };