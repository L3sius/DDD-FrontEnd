import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ShipmentPageState {
  cityFrom?: string;
  cityTo?: string;
  shipmentSize?: string;
  fragileStatus?: boolean;
  deliverySpeed?: string;
}

export const fetchShipmentPageState = createFeatureSelector<ShipmentPageState>(
  'shipmentPage'
);
export const fetchShipmentPageCityFrom = createSelector(
  fetchShipmentPageState,
  (state: ShipmentPageState) => state.cityFrom
);
