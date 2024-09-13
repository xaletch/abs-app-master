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

interface ProfileFormProps {
    form: NestedForm<ProfileType>;
}
export const ProfileForm: FC<ProfileFormProps> = ({ form }) => {
    const { control, path } = form;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-start">
            <div className="grid grid-cols-1 gap-2">
                <FormField
                    control={control}
                    name={path("name")}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Имя</FormLabel>
                                <FormControl>
                                    <Input {...field} className="h-12" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
                <FormField
                    control={control}
                    name={path("surname")}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Фамилия</FormLabel>
                                <FormControl>
                                    <Input {...field} className="h-12" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
                <FormField
                    control={control}
                    name={path("second_name")}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Отчество</FormLabel>
                                <FormControl>
                                    <Input {...field} className="h-12" />
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
                    name={path("email")}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Почта</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="email"
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
                    name={path("tg")}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Телеграмм</FormLabel>
                                <FormControl>
                                    <Input {...field} className="h-12" />
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
