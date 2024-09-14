import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { NestedForm } from "@/lib/nested-form";
import { ProfileType } from "./schema";
import { FC } from "react";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/atoms/phone-input";
import { PasswordInput } from "@/components/atoms/password-input";
import { CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface ProfileFormProps {
    form: NestedForm<ProfileType>;
}
export const ProfileForm: FC<ProfileFormProps> = ({ form }) => {
    const { control, path } = form;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="grid grid-cols-1 gap-4">
                <FormField
                    control={control}
                    name={path("name")}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className="font-semibold text-[15px] leading-4 mb-[15px]">Имя</FormLabel>
                                <FormControl>
                                    <Input {...field} className="h-[54px] rounded-lg" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
                <FormField
                    control={control}
                    name={path("phone")}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className="font-semibold text-[15px] leading-4 mb-[15px]">Телефон</FormLabel>
                                <FormControl>
                                    <PhoneInput {...field} className="h-[54px] rounded-lg"/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
                <FormField
                    control={control}
                    name={path("additional_email")}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className="font-semibold text-[15px] leading-4 mb-[15px]">Email для доп. уведомлений</FormLabel>
                                <FormControl>
                                    <Input {...field} className="h-[54px] rounded-lg" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
            </div>
            <div className="grid grid-cols-1 gap-4">
                <FormField
                    control={control}
                    name={path("email")}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className="font-semibold text-[15px] leading-4 mb-[15px]">Почта</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="email"
                                        className="h-[54px] rounded-lg"
                                    />
                                </FormControl>
                                <FormMessage />
                                <div className="flex gap-2 items-end">
                                    <Checkbox id="notify" />
                                        <label
                                            htmlFor="notify"
                                            className="text-sm font-medium leading-none text-foreground italic text-[12.5px]"
                                        >
                                            Получать уведомления на почту
                                        </label>
                                </div>
                            </FormItem>
                        );
                    }}
                />
                <FormField
                    control={control}
                    name={path("tg")}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className="font-semibold text-[15px] leading-4 mb-[15px]">Телеграмм</FormLabel>
                                <FormControl>
                                    <Input {...field} className="h-[54px] rounded-lg" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
            </div>
            <div className="grid grid-cols-1 gap-4 pl-0 2xl:pl-8">
                <h3 className="text-lg font-semibold leading-4">Изменить пароль</h3>
                <FormField
                    control={control}
                    name={path("new_password")}
                    render={({ field }) => {
                        return (
                            <FormItem className="mt-6">
                                <FormLabel className="font-semibold text-[15px] leading-4 mb-[15px]">Новый пароль</FormLabel>
                                <FormControl>
                                    <PasswordInput
                                        {...field}
                                        placeholder="Введите ваш пароль"
                                        className="h-[54px] rounded-lg"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
                <FormField
                    control={control}
                    name={path("new_password2")}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className="font-semibold text-[15px] leading-4 mb-[15px]">Повторите пароль</FormLabel>
                                <FormControl>
                                    <PasswordInput 
                                        {...field}
                                        placeholder="Введите ваш пароль"
                                        className="h-[54px] rounded-lg"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
                <CardDescription className="font-medium text-[14px] leading-4">
                    Ha ваш адрес электронной почты будет 
                    отправлено письмо с подтверждением 
                    установки нового пароля.
                </CardDescription>
            </div>
        </div>
    );
};
