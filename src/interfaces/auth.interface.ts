export interface IUserData {
  id: Number;
  email: string;
  name: string;
  gender: string;
  avatar: string;
  region: Number;
  state: Number;
  description: string;
  createdAt: string;
  updatedAt: string;
  token: string;
}
export interface IUserResponse {
  message: string;
  error: boolean;
  code: Number;
  data?: IUserData;
}


