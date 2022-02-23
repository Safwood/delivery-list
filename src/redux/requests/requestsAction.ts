import { Request } from '../../types';

export const UPDATE_REQUEST = "request/UPDATE_REQUEST"
export const UPDATE_ACTIVE_REQUEST = "request/UPDATE_ACTIVE_REQUEST"

export type UpdateRequest = {
  type: typeof UPDATE_REQUEST
  payload: Request
}

export type UpdateActiveRequest = {
  type: typeof UPDATE_ACTIVE_REQUEST
  payload: number
}

export type Actions = UpdateRequest | UpdateActiveRequest;

export const updateRequest = (request: Request): UpdateRequest => ({type: UPDATE_REQUEST, payload: request} as const)
export const updateActiveRequest = (key: number): UpdateActiveRequest => ({type: UPDATE_ACTIVE_REQUEST, payload: key} as const)
