import { InferType, object, string } from "yup";

export const loginSchmea = object({
    login_email: string().email().required("Это поле обязательно для заполнения"),
    login_password: string().min(6).required("Это поле обязательно для заполнения"),
});


export type LoginType = InferType<typeof loginSchmea>