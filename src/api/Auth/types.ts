export interface LoginRequest {
    login_password: string;
    login_email: string;
}

export interface RegisterRequest {
    reg_name: string;
    reg_email: string;
    reg_tel: string;
    reg_tg: string;
    reg_password: string;
    reg_password2: string;
}

export interface RegisterResponseSuccess {
    access: "allow";
    message: string;
}

export interface RegisterResponseError {
    access: "block";
    message: string;
}

export type RegisterResponse = RegisterResponseSuccess | RegisterResponseError;
export interface ForgotPasswordRequest {
    forgot_email: string;
}

export type LoginResponse = LoginResponseSuccess | LoginResponseError;
export interface LoginResponseSuccess {
    user_id: number;
    access: "allow";
}

export interface LoginResponseError {
    access: "block";
    message: string;
}

export type ForgotPasswordResponse =
    | ForgotPasswordResponseSuccess
    | ForgotPasswordResponseError;
export interface ForgotPasswordResponseSuccess {
    access: "allow";
    message: string;
}

export interface ForgotPasswordResponseError {
    access: "block";
    message: string;
}
