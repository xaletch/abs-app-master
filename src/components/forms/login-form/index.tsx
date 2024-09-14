import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { NestedForm } from "@/lib/nested-form";
import { LoginType } from "./schema";
import { FC } from "react";
import { FormLabel } from "@chakra-ui/react";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/atoms/password-input";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
interface LoginFormProps {
    form: NestedForm<LoginType>;
}
export const LoginForm: FC<LoginFormProps> = ({ form }) => {
    const { control, path } = form;
    return (
        <div className="grid grid-cols-1 gap-3">
            <FormField
                control={control}
                name={path("login_email")}
                render={({ field }) => {
                    return (
                        <FormItem>
                            <FormLabel className="font-semibold text-[15px] leading-4 mb-[15px]">Email</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Введите ваш email"
                                    className="h-[54px]"
                                    type="email"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    );
                }}
            />
            <FormField
                control={control}
                name={path("login_password")}
                render={({ field }) => {
                    return (
                        <FormItem>
                            <div className="flex items-center justify-between">
                                <FormLabel className="font-semibold text-[15px]">
                                    Пароль
                                </FormLabel>
                                <Link to="/forgot">
                                    <Button variant={"link"} type="button">
                                        Забыли пароль?
                                    </Button>
                                </Link>
                            </div>

                            <FormControl>
                                <PasswordInput
                                    {...field}
                                    placeholder="Введите ваш пароль"
                                    className="h-[54px]"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    );
                }}
            />
        </div>
    );
};
