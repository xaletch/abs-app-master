import { CitySelect } from "@/components/atoms/city-select";
import { CurrencyInput } from "@/components/atoms/currency-input";
import { DeadlineSelect } from "@/components/atoms/deadline-select";
import { DirectionFilter } from "@/components/atoms/direction-filter";
import { FinishingSelect } from "@/components/atoms/finishing-select";
import { MetroSelect } from "@/components/atoms/metro-select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const DirectoryFilter = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <div className="bg-white p-2 pb-0 ">
            <Collapsible open={open} onOpenChange={setOpen}>
                <div className="flex gap-4 flex-col">
                    {!open && (
                        <Input placeholder="Поиск по Названию ЖК, Застройщика, Округам, Районам, Метро" />
                    )}
                    <CollapsibleContent>
                        <div className="flex flex-col gap-4">
                            <Input placeholder="Поиск по Названию ЖК, Застройщика, Округам, Районам, Метро" />
                            <div className="flex gap-8  flex-wrap">
                                <div className="flex flex-col gap-3.5 flex-1">
                                    <div className="flex flex-col gap-2">
                                        <Label>Город</Label>
                                        <CitySelect onChange={() => {}} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label>Метро</Label>
                                        <MetroSelect onChange={() => {}} />
                                    </div>
                                    <div className="flex gap-1">
                                        <Checkbox id="extend" />
                                        <label
                                            htmlFor="extend"
                                            className="text-sm font-medium leading-none text-foreground/50"
                                        >
                                            Расширить до соседних станций
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3.5">
                                    <Label>Направление</Label>
                                    <DirectionFilter />
                                </div>
                                <div className="flex flex-col gap-3.5 ">
                                    <Label>Цена</Label>
                                    <div className="flex gap-2 ">
                                        <CurrencyInput
                                            placeholder="от"
                                            className="md:max-w-36 w-full"
                                        />
                                        <CurrencyInput
                                            placeholder="до"
                                            className="md:max-w-36 w-full"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 ">
                                        <Label>Площадь</Label>
                                        <div className="flex gap-2">
                                            <Input
                                                placeholder="от"
                                                className="md:max-w-36 w-full"
                                            />
                                            <Input
                                                placeholder="до"
                                                className="md:max-w-36 w-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3.5 ">
                                    <Label>Класс ЖК</Label>
                                    <div className="flex gap-3">
                                        <div className="flex gap-2 flex-col">
                                            <div className="flex gap-1">
                                                <Checkbox id="north" />
                                                <label
                                                    htmlFor="north"
                                                    className="text-sm font-medium leading-none text-foreground"
                                                >
                                                    Эконом
                                                </label>
                                            </div>
                                            <div className="flex gap-1">
                                                <Checkbox id="north" />
                                                <label
                                                    htmlFor="north"
                                                    className="text-sm font-medium leading-none text-foreground"
                                                >
                                                    Комфорт
                                                </label>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 flex-col">
                                            <div className="flex gap-1">
                                                <Checkbox id="north" />
                                                <label
                                                    htmlFor="north"
                                                    className="text-sm font-medium leading-none text-foreground"
                                                >
                                                    Бизнес
                                                </label>
                                            </div>
                                            <div className="flex gap-1">
                                                <Checkbox id="north" />
                                                <label
                                                    htmlFor="north"
                                                    className="text-sm font-medium leading-none text-foreground"
                                                >
                                                    Элитка
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <Label>Комнатность (ст)</Label>
                                    <div className="flex gap-1">
                                        <Button
                                            variant={"secondary"}
                                            size={"icon"}
                                        >
                                            СТ
                                        </Button>
                                        <Button
                                            variant={"secondary"}
                                            size={"icon"}
                                        >
                                            1
                                        </Button>
                                        <Button
                                            variant={"secondary"}
                                            size={"icon"}
                                        >
                                            2
                                        </Button>
                                        <Button
                                            variant={"secondary"}
                                            size={"icon"}
                                        >
                                            3
                                        </Button>
                                        <Button
                                            variant={"secondary"}
                                            size={"icon"}
                                        >
                                            4+
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3.5 md:max-w-56 w-full">
                                    <Label>Срок сдачи</Label>
                                    <DeadlineSelect onChange={() => {}} />
                                    <Label>Отделка</Label>
                                    <FinishingSelect onChange={() => {}} />
                                </div>
                            </div>
                        </div>
                    </CollapsibleContent>
                    <CollapsibleTrigger className="w-full">
                        {!open && (
                            <Button variant={"ghost"} className="w-full ">
                                <ChevronDown /> Все фильтры
                            </Button>
                        )}
                        {open && (
                            <Button variant={"ghost"} className="w-full ">
                                <ChevronUp /> Скрыть фильтры
                            </Button>
                        )}
                    </CollapsibleTrigger>
                </div>
            </Collapsible>
        </div>
    );
};
