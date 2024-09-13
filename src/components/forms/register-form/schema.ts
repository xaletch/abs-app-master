import { InferType, object, ref, string } from "yup";

export const registerSchema = object({
    reg_name: string().required("Это поле обязательно для заполнения"),
    reg_email: string().email().required("Это поле обязательно для заполнения"),
    reg_tel: string().required("Это поле обязательно для заполнения"),
    reg_password: string().min(6).required(),
    reg_password2: string()
        .oneOf([ref("reg_password")], "Пароли должны быть похожи")
        .required("Это поле обязательно для заполнения"),
    reg_tg: string().required("Это поле обязательно для заполнения"),
});

export type RegisterType = InferType<typeof registerSchema>;
