import { NestedForm } from "@/lib/nested-form";
import { EditObjectType } from "./schema";
import { FC } from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface EditObjectFormProps {
    form: NestedForm<EditObjectType>;
}
export const EditObjectForm: FC<EditObjectFormProps> = ({ form }) => {
    const { control, path } = form;
    return (
        <Form {...form}>
            <div className="grid grid-cols-1 gap-2">
                <FormField
                    control={control}
                    name={path("tag")}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Особенности</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name={path("content_about")}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Описание</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name={path("content_location")}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Расположение</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </Form>
    );
};
