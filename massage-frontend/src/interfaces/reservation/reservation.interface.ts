export interface IReservationForm {
  bookingDate: string;
  serviceMinute: number;
}

export interface IReservation {
  _id: string;
  bookingDate: string;
  serviceMinute: number;
  user: {
    _id: string;
    name: string;
    email: string;
    tel: string;
  };
  shop: {
    _id: string;
    name: string;
    address: string;
    tel: string;
  };
}
