export interface AuthUser {
  email: any;
  profile_id: string;
  login: string;
  firstName: string;
  lastName: string;
  dateOfLoginAttempt: string;
  countOfLoginAttempts: string;
  forceChangePassword: string;
}

export interface UserResponse {
  user: AuthUser;
  user_cookie: string; // JWT
  success: boolean;
  errors: boolean;
  data: any[];
}
