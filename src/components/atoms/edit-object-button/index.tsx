import { CRM } from "@/api/CRM/types";
import { EditObjectForm } from "@/components/forms/edit-object-form";
import { editObjectSchema } from "@/components/forms/edit-object-form/schema";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { nestedForm } from "@/lib/nested-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Pencil } from "lucide-react";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { InferType, object } from "yup";

interface EditObjectButtonProps {
    object: CRM;
}

const schema = object({
    object: editObjectSchema,
});
export const EditObjectButton: FC<EditObjectButtonProps> = (props) => {
    const { object } = props;
    const [open, setOpen] = useState(false);
    const form = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            object: {
                content_about: object.content_about,
                content_location: object.content_location,
            },
        },
    });

    const { handleSubmit } = form;

    const onEdit = async (data: InferType<typeof schema>) => {
        console.log(data);
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button
                    className="absolute top-2 right-2 text-foreground/50"
                    variant={"ghost"}
                >
                    <Pencil className="w-4 h-4" />
                    Редактировать
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-7xl">
                <DialogHeader>
                    <DialogTitle>
                        <div className="flex items-center">
                            <div className="w-16 h-16">
                                <img
                                    src={object.logo}
                                    className="w-full h-full object-cover "
                                />
                            </div>

                            {object.name}
                        </div>
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onEdit)}>
                    <Form {...form}>
                        <EditObjectForm form={nestedForm(form, "object")} />
                    </Form>

                    <DialogFooter>
                        <Button type="submit">Сохранить изменения</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};
