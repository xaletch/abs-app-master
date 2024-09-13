import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
import MetroIcon from "@/assets/metro-icon.svg";
interface MetroSelectProps {
  value?: number | undefined;
  onChange: (value: number) => void;
}
export const MetroSelect: FC<MetroSelectProps> = (props) => {
  const { onChange, value } = props;
  return (
    <Select
      value={value ? `${value}` : undefined}
      onValueChange={(value) => {
        onChange(parseInt(value));
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="Выберите метро" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">
          <div className="flex items-center gap-2">
            <img src={MetroIcon} /> Сокольники
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
