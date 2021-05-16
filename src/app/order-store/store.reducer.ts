import { Action, createReducer, on } from '@ngrx/store';
import {
  saveReceiverPageForm,
  saveSenderPageForm,
  saveShipmentPageForm,
  saveTrackingStatusForm,
} from './store.actions';
import {
  ReceiverPageState,
  SenderPageState,
  ShipmentPageState,
  trackingStatusPageState,
} from './store.selector';

export const initialState = {};

export const shipmentReducer = createReducer(
  initialState,
  on(saveShipmentPageForm, (state, action) => ({
    cityFrom: action.cityFrom,
    cityTo: action.cityTo,
    shipmentSize: action.shipmentSize,
    fragileStatus: action.fragileStatus,
    deliverySpeed: action.deliverySpeed,
  }))
);

export const senderReducer = createReducer(
  initialState,
  on(saveSenderPageForm, (state, action) => ({
    name: action.name,
    phone: action.phone,
    email: action.email,
    city: action.city,
    address: action.address,
    postalCode: action.postalCode,
  }))
);
export const receiverReducer = createReducer(
  initialState,
  on(saveReceiverPageForm, (state, action) => ({
    name: action.name,
    phone: action.phone,
    email: action.email,
    city: action.city,
    address: action.address,
    postalCode: action.postalCode,
    additionalInformation: action.additionalInformation,
  }))
);

export const trackingStatusReducer = createReducer(
  initialState,
  on(saveTrackingStatusForm, (state, action) => ({
    trackingNumber: action.trackingNumber,
  }))
);

export function shipmentPageReducer(state: ShipmentPageState, action: Action) {
  return shipmentReducer(state, action);
}

export function senderPageReducer(state: SenderPageState, action: Action) {
  return senderReducer(state, action);
}

export function receiverPageReducer(state: ReceiverPageState, action: Action) {
  return receiverReducer(state, action);
}

export function trackingStatusPageReducer(
  state: trackingStatusPageState,
  action: Action
) {
  return trackingStatusReducer(state, action);
}
