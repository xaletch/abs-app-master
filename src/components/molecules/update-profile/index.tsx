import { useUpdateProfileMutation } from "@/api/User";
import { UserResponseSuccess } from "@/api/User/types";
import { ProfileForm } from "@/components/forms/profile-form";
import { profileSchema } from "@/components/forms/profile-form/schema";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { LoadingButton } from "@/components/ui/loading-button";
import { nestedForm } from "@/lib/nested-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { InferType, object } from "yup";
const schema = object({
    profile: profileSchema,
});

interface UpdateProfileProps {
    user: UserResponseSuccess;
}
export const UpdateProfile: FC<UpdateProfileProps> = ({ user }) => {
    const form = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            profile: {
                email: user.email,
                name: user.name,
                second_name: user.second_name,
                surname: user.surname,
                tg: user.tg,
            },
        },
    });
    const { handleSubmit } = form;
    const [updateProfile, { isLoading }] = useUpdateProfileMutation();
    const onSubmit = async (data: InferType<typeof schema>) => {
        try {
            const response = await updateProfile({
                ...data.profile,
                user_id: user.user_id,
            }).unwrap();

            if (response.access == "allow") {
                toast.success("Данные пользователя изменены");
            }

            if (response.access == "block") {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error(JSON.stringify(error));
        }
    };
    return (
        <Card>
            <CardHeader>
                <CardTitle>Настройки профиля</CardTitle>
                <CardDescription>
                    Здесь вы можете легко управлять параметрами, чтобы создать
                    идеальное рабочее окружение
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form {...form}>
                    <CardContent>
                        <ProfileForm form={nestedForm(form, "profile")} />
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <LoadingButton
                            className="h-10"
                            type="submit"
                            loading={isLoading}
                        >
                            Сохранить изменения
                        </LoadingButton>
                    </CardFooter>
                </Form>
            </form>
        </Card>
    );
};
