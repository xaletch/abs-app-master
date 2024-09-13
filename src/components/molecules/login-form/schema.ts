import { InferType, object, string } from "yup";

export const LoginSchema = object({
  login: string().required("Поле обязательно для запонения"),
  password: string()
    .min(6, "Пароль должен быть не менее 6 символов")
    .required("Поле обязательно для запонения"),
});

export type LoginType = InferType<typeof LoginSchema>;
