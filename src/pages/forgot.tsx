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
import { Logo } from "@/components/atoms/logo";
import { Telegram } from "@/components/atoms/Telegram/Telegram";
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
            <Card className="border-0 rounded-3xl max-w-[541px] w-full px-[45px] pt-8 pb-11">
                <Logo />
                <CardHeader >
                    <CardTitle>Восстановление пароля</CardTitle>
                    <CardDescription>
                        Введите данные учетной записи для авторизации
                    </CardDescription>
                </CardHeader>

                <form onSubmit={form.handleSubmit(onForgot)}>
                    <Form {...form}>
                        <CardContent>
                            <ForgotForm form={nestedForm(form, "forgot")} />
                            <LoadingButton
                                loading={isLoading}
                                type="submit"
                                className="w-full mt-6 my-8 h-[55px] text-[15px] text-[#021425]"
                            >
                                Отправить на почту
                            </LoadingButton>
                        </CardContent>
                        <CardFooter className="flex flex-col mt-2">
                            <div className="flex items-center justify-center w-full text-[13.5px] h-3 pb-6">
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
                                <div className="relative flex justify-center text-[13.5px] font-medium">
                                    <span className="bg-background px-2 text-muted-foreground">
                                        Помощь
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 w-full mt-8">
                                <a href="https://t.me/anatskoK" target="_blank">
                                    <Button
                                        className="w-full h-12 text-[14px] font-normal gap-[7px]"
                                        variant={"outline"}
                                        type="button"
                                    >
                                        <Telegram />
                                        @anatskoK
                                    </Button>
                                </a>
                                <a href="tel:+74951351660" target="_blank">
                                    <Button
                                        className="w-full h-12 text-[14px] font-normal gap-[7px]"
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
