export interface Auth {
  email: string;
  name: string;
  token: string;
  refreshToken: string;
}

export interface SignUp {
  email: string;
  password: string;
  name: string;
}

export interface SignIn {
  email: string;
  password: string;
}
