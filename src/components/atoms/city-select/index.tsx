import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
interface CitySelectProps {
  value?: number | undefined;
  onChange: (value: number) => void;
}
export const CitySelect: FC<CitySelectProps> = (props) => {
  const { onChange, value } = props;
  return (
    <Select
      value={value ? `${value}` : undefined}
      onValueChange={(value) => {
        onChange(parseInt(value));
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="Выберите город" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Москва</SelectItem>
        <SelectItem value="2">Новосибирск</SelectItem>
      </SelectContent>
    </Select>
  );
};
