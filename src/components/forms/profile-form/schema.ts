import { InferType, object, string } from "yup";

export const profileSchema = object({
    name: string(),
    surname: string(),
    second_name: string(),
    tg: string(),
    email: string().email(),
});

export type ProfileType = InferType<typeof profileSchema>;
