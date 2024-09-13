import { useRegisterMutation } from "@/api/Auth";
import { RegisterForm } from "@/components/forms/register-form";
import { registerSchema } from "@/components/forms/register-form/schema";
import { Button } from "@/components/ui/button";
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
import { useTheme } from "@/components/ui/theme-provider";
import { nestedForm } from "@/lib/nested-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { InferType, object } from "yup";

const schema = object({
    register: registerSchema,
});
export const Register = () => {
    const { setTheme } = useTheme();
    const [register, { isLoading }] = useRegisterMutation();
    const form = useForm({
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();
    const onRegister = async (data: InferType<typeof schema>) => {
        try {
            const response = await register({
                ...data.register,
            }).unwrap();
            if (response.access == "allow") {
                toast.success(response.message);
                navigate({
                    to: "/login",
                });
            }

            if (response.access == "block") {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error(JSON.stringify(error));
        }
    };
    useEffect(() => {
        setTheme("orange");

        return () => setTheme("light");
    }, [setTheme]);
    return (
        <div className="w-full h-dvh flex items-center justify-center px-4">
            <Card className="border-0 rounded-3xl max-w-4xl w-full">
                <CardHeader className="px-11 py-10">
                    <CardTitle>Регистрация пользователя</CardTitle>
                    <CardDescription>
                        Введите данные учетной записи для авторизации
                    </CardDescription>
                </CardHeader>
                <form onSubmit={form.handleSubmit(onRegister)}>
                    <Form {...form}>
                        <CardContent className="px-11 pt-0">
                            <RegisterForm form={nestedForm(form, "register")} />
                            <div className="grid grid-cols-2">
                                <LoadingButton
                                    loading={isLoading}
                                    type="submit"
                                    className="w-full mt-10 h-12"
                                >
                                    Авторизаться
                                </LoadingButton>
                            </div>
                        </CardContent>
                        <div className="grid grid-cols-2 px-11">
                            <CardFooter className="flex flex-col gap-4 pb-10 px-0">
                                <div className="flex items-center justify-center w-full">
                                    <p>У вас уже есть учетная запись?</p>
                                    <Link to="/login">
                                        <Button variant={"link"} type="button">
                                            Авторизоваться
                                        </Button>
                                    </Link>
                                </div>
                                <div className="relative w-full">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-background px-2 text-muted-foreground">
                                            Помощь
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 w-full">
                                    <a
                                        href="https://t.me/anatskoK"
                                        target="_blank"
                                    >
                                        <Button
                                            className="w-full h-12"
                                            variant={"outline"}
                                            type="button"
                                        >
                                            @anatskoK
                                        </Button>
                                    </a>
                                    <a href="tel:+74951351660" target="_blank">
                                        <Button
                                            className="w-full h-12"
                                            variant={"outline"}
                                            type="button"
                                        >
                                            <Phone />
                                            +7 (495) 135-16-60
                                        </Button>
                                    </a>
                                </div>
                            </CardFooter>
                        </div>
                    </Form>
                </form>
            </Card>
        </div>
    );
};
