import { createAction, props } from '@ngrx/store';

export const saveShipmentPageForm = createAction(
  '[Shipment Page Component] save shipment page form',
  props<{
    cityFrom: string;
    cityTo: string;
    shipmentSize: string;
    fragileStatus: boolean;
    deliverySpeed: string;
  }>()
);

//Dispatchinamas (iš komponento actioną dispachinį ir pagal jį suveiks:
// arba reduceris (išsaugo į state duomenis kuriuos paduodi su actionu)
// arba efektas (jame pažymi kad jis suveiks su kažkokiu actionu))
