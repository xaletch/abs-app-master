import { Input, InputProps } from "@/components/ui/input";
import { FC } from "react";
interface CurrencyInputProps extends InputProps {}
export const CurrencyInput: FC<CurrencyInputProps> = (props) => {
  return (
    <div className="relative">
      <Input {...props} />
      <div className="absolute right-4 top-[50%] translate-y-[-50%]">₽</div>
    </div>
  );
};
