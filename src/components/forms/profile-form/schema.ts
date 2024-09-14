import { InferType, object, string } from "yup";

export const profileSchema = object({
    name: string(),
    // surname: string(),
    // second_name: string(),
    tg: string(),
    email: string().email(),
    // new data
    phone: string(),
    additional_email: string(),
    new_password: string(),
    new_password2: string(),
});

export type ProfileType = InferType<typeof profileSchema>;
