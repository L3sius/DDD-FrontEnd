export interface orderHistoryContent {
  additionalInfo?: string;
  id: number;
  trackingNumber: string;
  receiver: receiverContent;
  receiverAddress: receiverAddressContent;
  parcelInfo: parcelInfoContent;
  sender: senderContent;
  senderAddress: senderAddressContent;
}

export interface senderContent {
  email: string;
  name: string;
  phoneNumber: string;
}

export interface senderAddressContent {
  address: string;
  city: string;
  postalCode: string;
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
