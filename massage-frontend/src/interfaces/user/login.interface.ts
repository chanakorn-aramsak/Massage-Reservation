export interface ILogin {
  email?: string;
  password?: string;
}

export interface IRegister {
  name: string;
  email: string;
  tel: string;
  role: string;
  password: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  tel: string;
  role: string;
}
