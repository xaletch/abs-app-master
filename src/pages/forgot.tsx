import { ForgotForm } from "@/components/forms/forgot-form";
import { forgotSchema } from "@/components/forms/forgot-form/schema";
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
import { nestedForm } from "@/lib/nested-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { InferType, object } from "yup";
import { Link, useNavigate } from "@tanstack/react-router";
import { useForgotPasswordMutation } from "@/api/Auth";
import { LoadingButton } from "@/components/ui/loading-button";
import { toast } from "sonner";
import { useTheme } from "@/components/ui/theme-provider";
import { useEffect } from "react";
const schema = object({
    forgot: forgotSchema,
});
export const ForgotPage = () => {
    const { setTheme } = useTheme();
    const form = useForm({
        resolver: yupResolver(schema),
    });
    const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
    const navigate = useNavigate();
    const onForgot = async (data: InferType<typeof schema>) => {
        try {
            const response = await forgotPassword({
                ...data.forgot,
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
            <Card className="border-0 rounded-3xl max-w-lg w-full">
                <CardHeader className="px-11 py-10">
                    <CardTitle>Восстановление пароля</CardTitle>
                    <CardDescription>
                        Введите данные учетной записи для авторизации
                    </CardDescription>
                </CardHeader>

                <form onSubmit={form.handleSubmit(onForgot)}>
                    <Form {...form}>
                        <CardContent className="px-11 pt-0">
                            <ForgotForm form={nestedForm(form, "forgot")} />
                            <LoadingButton
                                loading={isLoading}
                                type="submit"
                                className="w-full mt-10 h-12"
                            >
                                Отправить на почту
                            </LoadingButton>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-4 px-11">
                            <div className="flex items-center justify-center w-full">
                                <p>У вас нет учетной записи?</p>
                                <Link to="/register">
                                    <Button variant={"link"}>
                                        Зарегистрироваться
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
                                <a href="https://t.me/anatskoK" target="_blank">
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
                    </Form>
                </form>
            </Card>
        </div>
    );
};
