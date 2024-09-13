import { PhoneInput } from "@/components/atoms/phone-input";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NestedForm } from "@/lib/nested-form";
import { FC } from "react";
import { RegisterType } from "./schema";
import { PasswordInput } from "@/components/atoms/password-input";

interface RegisterFormProps {
    form: NestedForm<RegisterType>;
}
export const RegisterForm: FC<RegisterFormProps> = ({ form }) => {
    const { control, path } = form;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start justify-start">
            <div className="grid grid-cols-1 gap-2">
                <FormField
                    control={control}
                    name={path("reg_name")}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className="font-medium">
                                    Имя*
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Введите ваше имя"
                                        className="h-12"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
                <FormField
                    control={control}
                    name={path("reg_email")}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className="font-medium">
                                    Email*
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="email"
                                        placeholder="Введите ваш email"
                                        className="h-12"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
                <FormField
                    control={control}
                    name={path("reg_tel")}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className="font-medium">
                                    Телефон
                                </FormLabel>
                                <FormControl>
                                    <PhoneInput
                                        {...field}
                                        placeholder="Введите ваш телефон"
                                        className="h-12"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
            </div>
            <div className="grid grid-cols-1 gap-2">
                <FormField
                    control={control}
                    name={path("reg_password")}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className="font-medium">
                                    Придумайте пароль*
                                </FormLabel>
                                <FormControl>
                                    <PasswordInput
                                        {...field}
                                        placeholder="Введите ваш пароль"
                                        className="h-12"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
                <FormField
                    control={control}
                    name={path("reg_password2")}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className="font-medium">
                                    Повторите пароль*
                                </FormLabel>
                                <FormControl>
                                    <PasswordInput
                                        {...field}
                                        placeholder="Повторите ваш пароль"
                                        className="h-12"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
                <FormField
                    control={control}
                    name={path("reg_tg")}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className="font-medium">
                                    Телеграмм акк*
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Введите TG"
                                        className="h-12"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
            </div>
        </div>
    );
};
