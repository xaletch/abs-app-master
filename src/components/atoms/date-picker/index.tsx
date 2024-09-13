import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { FC } from "react";
import { SelectSingleEventHandler } from "react-day-picker";
export interface DatePickerProps {
    value?: Date;
    onChange: SelectSingleEventHandler;
}
export const DatePicker: FC<DatePickerProps> = (props) => {
    const { onChange, value } = props;
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        " pl-3 px-2 text-base h-10 text-left font-normal",
                        !value && "text-muted-foreground"
                    )}
                >
                    {value ? (
                        format(value, "PPP", {
                            locale: ru,
                        })
                    ) : (
                        <span>Выберите дату</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={value}
                    onSelect={onChange}
                    numberOfMonths={2}
                    locale={ru}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
};
