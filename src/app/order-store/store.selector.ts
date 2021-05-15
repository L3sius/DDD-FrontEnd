import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ShipmentPageState {
  cityFrom?: string;
  cityTo?: string;
  shipmentSize?: string;
  fragileStatus?: boolean;
  deliverySpeed?: string;
}

export interface SenderPageState {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  address?: string;
  postalCode?: string;
}

export interface ReceiverPageState {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  address?: string;
  postalCode?: string;
  additionalInformation?: string;
}

export interface trackingStatusPageState {
  trackingNumber?: string;
}

export const fetchShipmentPageState =
  createFeatureSelector<ShipmentPageState>('shipmentPage');

export const fetchSenderPageState =
  createFeatureSelector<SenderPageState>('senderPage');

export const fetchReceiverPageState =
  createFeatureSelector<SenderPageState>('receiverPage');

export const fetchTrackingStatusPageState =
  createFeatureSelector<trackingStatusPageState>('trackingStatusPage');

//Fetch one thing (example)
export const fetchShipmentPageCityFrom = createSelector(
  fetchShipmentPageState,
  (state: ShipmentPageState) => state.cityFrom
);
