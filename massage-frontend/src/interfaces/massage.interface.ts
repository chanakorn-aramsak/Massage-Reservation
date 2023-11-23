export interface IMassage {
    _id: string;
    name: string;
    priceLevel: number;
    address: string;
    province: string;
    postalcode: string;
    tel: string;
    picture: string;
    __v: number;
    id: string;
  }
  

  export interface IMassageBody {
    name: string;
    priceLevel: number;
    address: string;
    province: string;
    postalcode: string;
    tel: string;
    picture: string;
  }