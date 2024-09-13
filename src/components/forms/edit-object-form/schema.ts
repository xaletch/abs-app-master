import { InferType, object, string } from "yup";

export const editObjectSchema = object({
    content_about: string().required(),
    content_location: string().required(),
    tag: string().required(),
});

export type EditObjectType = InferType<typeof editObjectSchema>;
