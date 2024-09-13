import { baseApi } from "../Base";
import {
    LoginRequest,
    LoginResponse,
    RegisterRequest,
    ForgotPasswordRequest,
    ForgotPasswordResponse,
    RegisterResponse,
} from "./types";

const authApi = baseApi.injectEndpoints({
    endpoints(build) {
        return {
            login: build.mutation<LoginResponse, LoginRequest>({
                query: (data) => ({
                    url: "/CRM/login.php",
                    method: "POST",
                    body: JSON.stringify(data),
                }),
            }),
            register: build.mutation<RegisterResponse, RegisterRequest>({
                query: (data) => ({
                    url: "/CRM/login.php",
                    method: "POST",
                    body: JSON.stringify(data),
                }),
            }),

            forgotPassword: build.mutation<
                ForgotPasswordResponse,
                ForgotPasswordRequest
            >({
                query: (data) => ({
                    url: "/CRM/login.php",
                    body: JSON.stringify(data),
                    method: "POST",
                }),
            }),
        };
    },
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useForgotPasswordMutation,
} = authApi;
