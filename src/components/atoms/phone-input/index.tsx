import { Input, InputProps } from "@/components/ui/input";
import mergeRefs from "@/lib/utils";
import { useMask } from "@react-input/mask";
import { forwardRef } from "react";
export const PhoneInput = forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        const inputRef = useMask({
            mask: "+7 (___) ___-__-__",
            replacement: { _: /\d/ },
            showMask: true,
        });
        const refs = mergeRefs(ref, inputRef);

        return <Input ref={refs} {...props} />;
    }
);


