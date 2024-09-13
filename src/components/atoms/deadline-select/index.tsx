import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
interface DeadlineSelectProps {
  value?: number | undefined;
  onChange: (value: number) => void;
}
export const DeadlineSelect: FC<DeadlineSelectProps> = (props) => {
  const { onChange, value } = props;
  return (
    <Select
      value={value ? `${value}` : undefined}
      onValueChange={(value) => {
        onChange(parseInt(value));
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="Сдан" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Сдан1</SelectItem>
        <SelectItem value="2">Сдан2</SelectItem>
      </SelectContent>
    </Select>
  );
};
