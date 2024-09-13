import { FC } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
interface FinishingSelectProps {
    value?: number | undefined;
    onChange: (value: number) => void;
}
export const FinishingSelect: FC<FinishingSelectProps> = (props) => {
    const { onChange, value } = props;
    return (
        <Select
            value={value ? `${value}` : undefined}
            onValueChange={(value) => {
                onChange(parseInt(value));
            }}
        >
            <SelectTrigger>
                <SelectValue placeholder="Отделка" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="1">Да</SelectItem>
                <SelectItem value="2">Нет</SelectItem>
            </SelectContent>
        </Select>
    );
};
