import { Action, createReducer, on } from '@ngrx/store';
import { ReceiverPageComponent } from '../receiver-page/receiver-page.component';
import { SenderPageComponent } from '../sender-page/sender-page.component';
import {
  saveReceiverPageForm,
  saveSenderPageForm,
  saveShipmentPageForm,
} from './store.actions';
import {
  ShipmentPageState,
  SenderPageState,
  ReceiverPageState,
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

export function shipmentPageReducer(state: ShipmentPageState, action: Action) {
  return shipmentReducer(state, action);
}

export function senderPageReducer(state: SenderPageState, action: Action) {
  return senderReducer(state, action);
}

export function receiverPageReducer(state: ReceiverPageState, action: Action) {
  return receiverReducer(state, action);
}
