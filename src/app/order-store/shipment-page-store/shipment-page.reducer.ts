import { Action, createReducer, on } from '@ngrx/store';
import { saveShipmentPageForm } from './shipment-page.actions';
import { ShipmentPageState } from './shipment-page.selector';

export const initialState = {};

export const reducer = createReducer(
  initialState,
  on(saveShipmentPageForm, (state, action) => ({
    cityFrom: action.cityFrom,
    cityTo: action.cityTo,
    shipmentSize: action.shipmentSize,
    fragileStatus: action.fragileStatus,
    deliverySpeed: action.deliverySpeed,
  }))
);

export function shipmentPageReducer(state: ShipmentPageState, action: Action) {
  return reducer(state, action);
}
