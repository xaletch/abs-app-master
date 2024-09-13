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
import { ForgotType } from "./schema";
interface ForgotFormProps {
    form: NestedForm<ForgotType>;
}
export const ForgotForm: FC<ForgotFormProps> = ({ form }) => {
    const { control, path } = form;
    return (
        <div className="grid grid-cols-1 gap-1">
            <FormField
                control={control}
                name={path("forgot_email")}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input
                                placeholder="Введите ваш email"
                                {...field}
                                type="email"
                                className="h-12"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};
