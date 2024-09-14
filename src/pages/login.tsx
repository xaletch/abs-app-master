import { useLoginMutation } from "@/api/Auth";
import { Logo } from "@/components/atoms/logo";
import { Phone } from "@/components/atoms/Phone/Phone";
import { Telegram } from "@/components/atoms/Telegram/Telegram";
import { LoginForm } from "@/components/forms/login-form";
import { loginSchmea } from "@/components/forms/login-form/schema";
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
import { EXPIRES_AT, USER_ID } from "@/constants/user";
import { nestedForm } from "@/lib/nested-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "@tanstack/react-router";
import { addDays } from "date-fns";
import qs from "qs";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { InferType, object } from "yup";
const schema = object({
    login: loginSchmea,
});
export const Login = () => {
    const { setTheme } = useTheme();
    const [login, { isLoading }] = useLoginMutation();
    const form = useForm({
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();
    const onLogin = async (data: InferType<typeof schema>) => {
        const parsedQueryString = qs.parse(window.location.search.slice(1));
        try {
            const response = await login({
                ...data.login,
            }).unwrap();

            if (response.access == "allow") {
                localStorage.setItem(USER_ID, JSON.stringify(response.user_id));
                localStorage.setItem(
                    EXPIRES_AT,
                    JSON.stringify(addDays(new Date(), 7))
                );
                if (
                    parsedQueryString.from &&
                    typeof parsedQueryString.from == "string"
                ) {
                    navigate({ to: parsedQueryString.from });
                } else {
                    navigate({ to: "/a/directory" });
                }
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
                <CardHeader className="">
                    <CardTitle>Авторизация</CardTitle>
                    <CardDescription>
                        Введите данные учетной записи для авторизации
                    </CardDescription>
                </CardHeader>
                <form onSubmit={form.handleSubmit(onLogin)}>
                    <Form {...form}>
                        <CardContent>
                            <LoginForm form={nestedForm(form, "login")} />
                            <LoadingButton
                                type="submit"
                                className="w-full mt-6 mb-8 h-[55px] text-[16px] text-[#021425]"
                                loading={isLoading}
                            >
                                Авторизаться
                            </LoadingButton>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-0">
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
                            <div className="grid grid-cols-2 gap-2 w-full mt-8">
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
