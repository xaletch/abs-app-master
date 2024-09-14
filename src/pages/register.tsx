import { useRegisterMutation } from "@/api/Auth";
import { Logo } from "@/components/atoms/logo";
import { Telegram } from "@/components/atoms/Telegram/Telegram";
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
            <Card className="border-0 rounded-3xl max-w-[1020px] w-full px-[45px] pt-8 pb-11">
                <Logo />
                <CardHeader>
                    <CardTitle>Регистрация пользователя</CardTitle>
                    <CardDescription>
                        Введите данные учетной записи для авторизации
                    </CardDescription>
                </CardHeader>
                <form onSubmit={form.handleSubmit(onRegister)}>
                    <Form {...form}>
                        <CardContent>
                            <RegisterForm form={nestedForm(form, "register")} />
                            <div className="grid grid-cols-2 gap-[30px]">
                                <LoadingButton
                                    loading={isLoading}
                                    type="submit"
                                    className="w-full mt-6 mb-8 h-[55px] text-[16px] text-[#021425]"
                                >
                                    Авторизаться
                                </LoadingButton>
                            </div>
                        </CardContent>
                        <div className="grid grid-cols-2 gap-[30px]">
                            <CardFooter className="flex flex-col pb-10 px-0">
                                <div className="flex items-center justify-center w-full text-[13.5px] h-3 pb-6">
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
                        </div>
                    </Form>
                </form>
            </Card>
        </div>
    );
};
