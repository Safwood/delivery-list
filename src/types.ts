import { LatLngExpression } from 'leaflet';

export type Route = {
  [key: string]: LatLngExpression,
}

export type Point = {
  id: string,
  address: string,
  coords: LatLngExpression
}

export type Request = {
  key: number,
  name: string,
  loading: string,
  unloading: string,
  route: Route
}

export type DefaultRecordType = Record<string, any>;