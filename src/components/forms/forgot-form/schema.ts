import { InferType, object, string } from "yup";

export const forgotSchema = object({
    forgot_email: string()
        .email()
        .required("Это поле обязательно для заполнения"),
});

export type ForgotType = InferType<typeof forgotSchema>;
