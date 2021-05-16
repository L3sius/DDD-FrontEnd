export interface paymentContent {
  sessionToken?: string;
  receiver: receiverContent;
  senderAddressId: number;
  receiverAddress: receiverAddressContent;
  parcelInfo: parcelInfoContent;
}

export interface receiverContent {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface receiverAddressContent {
  address: string;
  city: string;
  postalCode: string;
}

export interface parcelInfoContent {
  fragileType: number;
  sizeType: string;
  speedType: string;
}
