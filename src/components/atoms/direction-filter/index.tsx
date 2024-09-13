import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

export const DirectionFilter = () => {
    return (
        <>
            <div className="flex gap-1 ">
                <Checkbox id="center" />
                <label
                    htmlFor="center"
                    className="text-sm font-medium leading-none text-foreground"
                >
                    Центр
                </label>
            </div>
            <div className="flex gap-2 flex-wrap items-center">
                <div className="flex gap-1">
                    <Checkbox id="north" />
                    <label
                        htmlFor="north"
                        className="text-sm font-medium leading-none text-foreground"
                    >
                        Север
                    </label>
                </div>
                <Separator orientation="vertical" className="h-3" />
                <div className="flex gap-1">
                    <Checkbox id="northeast" />
                    <label
                        htmlFor="northeast"
                        className="text-sm font-medium leading-none text-foreground/50"
                    >
                        Северо-Восток
                    </label>
                </div>
                <Separator orientation="vertical" className="h-3" />
                <div className="flex gap-1">
                    <Checkbox id="northwest" />
                    <label
                        htmlFor="northwest"
                        className="text-sm font-medium leading-none text-foreground/50"
                    >
                        Северо-Запад
                    </label>
                </div>
            </div>
            <div className="flex gap-2 flex-wrap items-center">
                <div className="flex gap-1">
                    <Checkbox id="north" />
                    <label
                        htmlFor="north"
                        className="text-sm font-medium leading-none text-foreground"
                    >
                        Восток
                    </label>
                </div>
                <Separator orientation="vertical" className="h-3" />
                <div className="flex gap-1 ">
                    <Checkbox id="northeast" />
                    <label
                        htmlFor="northeast"
                        className="text-sm font-medium leading-none text-foreground/50"
                    >
                        Северо-Восток
                    </label>
                </div>
                <Separator orientation="vertical" className="h-3" />
                <div className="flex gap-1">
                    <Checkbox id="northwest" />
                    <label
                        htmlFor="northwest"
                        className="text-sm font-medium leading-none text-foreground/50"
                    >
                        Юго-Восток
                    </label>
                </div>
            </div>
            <div className="flex gap-2 flex-wrap items-center">
                <div className="flex gap-1 ">
                    <Checkbox id="north" />
                    <label
                        htmlFor="north"
                        className="text-sm font-medium leading-none text-foreground"
                    >
                        Юг
                    </label>
                </div>
                <Separator orientation="vertical" className="h-3" />
                <div className="flex gap-1">
                    <Checkbox id="northeast" />
                    <label
                        htmlFor="northeast"
                        className="text-sm font-medium leading-none text-foreground/50"
                    >
                        Юго-Запад
                    </label>
                </div>
                <Separator orientation="vertical" className="h-3" />
                <div className="flex gap-1">
                    <Checkbox id="northwest" />
                    <label
                        htmlFor="northwest"
                        className="text-sm font-medium leading-none text-foreground/50"
                    >
                        Юго-Восток
                    </label>
                </div>
            </div>
            <div className="flex gap-2 flex-wrap items-center">
                <div className="flex gap-1">
                    <Checkbox id="north" />
                    <label
                        htmlFor="north"
                        className="text-sm font-medium leading-none text-foreground"
                    >
                        Запад
                    </label>
                </div>
                <Separator orientation="vertical" className="h-3" />
                <div className="flex gap-1">
                    <Checkbox id="northeast" />
                    <label
                        htmlFor="northeast"
                        className="text-sm font-medium leading-none text-foreground/50"
                    >
                        Юго-Запад
                    </label>
                </div>
                <Separator orientation="vertical" className="h-3" />
                <div className="flex gap-1">
                    <Checkbox id="northwest" />
                    <label
                        htmlFor="northwest"
                        className="text-sm font-medium leading-none text-foreground/50"
                    >
                        Северо-Запад
                    </label>
                </div>
            </div>
            <div className="flex gap-2 flex-wrap items-center">
                <div className="flex gap-1">
                    <Checkbox id="north" />
                    <label
                        htmlFor="north"
                        className="text-sm font-medium leading-none text-foreground"
                    >
                        Новая Москва
                    </label>
                </div>
                <Separator orientation="vertical" className="h-3" />
                <div className="flex gap-1">
                    <Checkbox id="northeast" />
                    <label
                        htmlFor="northeast"
                        className="text-sm font-medium leading-none text-foreground/50"
                    >
                        Внутри МКАДа
                    </label>
                </div>
            </div>
        </>
    );
};
