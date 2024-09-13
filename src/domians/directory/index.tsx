import { useGetObjectListQuery } from "@/api/CRM";
import { Map2GIS } from "@/components/atoms/2GIS";
import { ObjectMarker } from "@/components/atoms/object-marker";
import { DirectoryFilter } from "@/components/molecules/directory-filter";
import { ObjectCard } from "@/components/molecules/object";
import { ObjectList } from "@/components/organisms/object-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Loader2,
    Menu,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useMedia } from "react-use";
import { Drawer } from "vaul";

export const DirectoryPage = () => {
    const { data, isLoading } = useGetObjectListQuery();
    const isMobile = useMedia("(max-width: 900px)");
    const [snap, setSnap] = useState<number | string | null>("90px");
    const [open, setOpen] = useState(true);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        if (!open) {
            setOpen(true);
            setSnap("200px");
        }
    }, [open]);

    const onToggleCollapse = () => {
        if (collapsed) {
            setCollapsed(false);
        } else {
            setCollapsed(true);
        }
    };

    const filterTags = useMemo(() => {
        return [
            {
                label: "Панорамное остекление",
                id: 0,
            },
            {
                label: "Лоджия",
                id: 1,
            },
            {
                label: "Балкон",
                id: 3,
            },
            {
                label: "Кладовые",
                id: 4,
            },
            {
                label: "Терасса",
                id: 5,
            },
            {
                label: "Низкоэтажность",
                id: 6,
            },
            {
                label: "Небоскреб",
                id: 7,
            },
            {
                label: "Пентхаус",
                id: 8,
            },
        ];
    }, []);

    const [tags, setTags] = useState<number[]>([]);

    return (
        <div className="w-full h-full">
            {!isMobile && <DirectoryFilter />}

            {!isMobile && (
                <div
                    className={cn(
                        "mt-4 grid grid-cols-[minmax(0px,840px)_minmax(300px,1fr)] gap-2",
                        collapsed && "grid-cols-1"
                    )}
                >
                    {!collapsed && (
                        <div
                            className={cn(
                                "flex flex-col gap-2",
                                collapsed && "hidden"
                            )}
                        >
                            <div className="flex flex-col gap-4 mt-0">
                                <div className="flex justify-between">
                                    {collapsed ? (
                                        <Button
                                            onClick={onToggleCollapse}
                                            className="sticky top-0"
                                        >
                                            <ChevronRight className="w-4 h-4" />
                                            Развернуть
                                        </Button>
                                    ) : (
                                        <Button onClick={onToggleCollapse}>
                                            <ChevronLeft className="w-4 h-4" />
                                            Свернуть
                                        </Button>
                                    )}

                                    <div className="flex gap-1 items-center">
                                        <Popover>
                                            <PopoverTrigger>
                                                <Button variant={"ghost"}>
                                                    По приоритету{" "}
                                                    <ChevronDown />
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent
                                                className=" flex flex-col gap-2 justify-start"
                                                align="end"
                                            >
                                                <Button
                                                    variant={"ghost"}
                                                    className="justify-start"
                                                >
                                                    По приоритету
                                                </Button>
                                                <Button
                                                    variant={"ghost"}
                                                    className="justify-start"
                                                >
                                                    Цена по возрастанию
                                                </Button>
                                                <Button
                                                    variant={"ghost"}
                                                    className="justify-start"
                                                >
                                                    Цена по убыванию
                                                </Button>
                                                <Button
                                                    variant={"ghost"}
                                                    className="justify-start"
                                                >
                                                    Площадь по возрастанию
                                                </Button>
                                                <Button
                                                    variant={"ghost"}
                                                    className="justify-start"
                                                >
                                                    Площадь по убыванию
                                                </Button>
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                </div>
                                <Separator />
                                <div className="flex gap-2">
                                    {filterTags.map(({ id, label }) => {
                                        return (
                                            <Button
                                                key={id}
                                                className="italic cursor-pointer text-xs"
                                                variant="secondary"
                                                {...(tags.includes(id) && {
                                                    variant: "default",
                                                })}
                                                onClick={() => {
                                                    setTags((prevState) => {
                                                        if (
                                                            prevState.includes(
                                                                id
                                                            )
                                                        ) {
                                                            return prevState.filter(
                                                                (tag) => {
                                                                    return (
                                                                        tag !=
                                                                        id
                                                                    );
                                                                }
                                                            );
                                                        }
                                                        return [
                                                            ...prevState,
                                                            id,
                                                        ];
                                                    });
                                                }}
                                            >
                                                {label}
                                            </Button>
                                        );
                                    })}
                                </div>
                            </div>
                            {data && <ObjectList list={data} modalOpen />}
                            {isLoading && (
                                <div className="flex items-center justify-center">
                                    <Loader2 className="animate-spin" />
                                </div>
                            )}
                        </div>
                    )}
                    <div className="h-dvh sticky rounded-lg top-0 ">
                        <Map2GIS
                            initialMapOptions={{
                                center: [74.606309, 42.848305],
                                zoom: 15,
                            }}
                        >
                            <ObjectMarker
                                coordinates={[74.604923, 42.847277]}
                            />
                            <ObjectMarker
                                coordinates={[74.620365, 42.852053]}
                            />
                        </Map2GIS>
                        {collapsed && (
                            <Button
                                onClick={onToggleCollapse}
                                className="absolute top-2 left-2"
                            >
                                <ChevronRight className="w-4 h-4" />
                                Развернуть
                            </Button>
                        )}
                    </div>
                </div>
            )}
            {isMobile && (
                <div className="h-dvh">
                    <Map2GIS
                        initialMapOptions={{
                            center: [74.606309, 42.848305],
                            zoom: 15,
                        }}
                        className="w-full h-full rounded-lg overflow-hidden z-50 pointer-events-auto"
                    >
                        <ObjectMarker coordinates={[74.604923, 42.847277]} />
                        <ObjectMarker coordinates={[74.620365, 42.852053]} />
                    </Map2GIS>
                </div>
            )}
            {isMobile && open && (
                <Drawer.Root
                    snapPoints={["90px", 1]}
                    activeSnapPoint={snap}
                    open={open}
                    setActiveSnapPoint={(snapPoint) => {
                        if (snapPoint) {
                            setSnap(snapPoint);
                        } else {
                            setOpen(false);
                            setSnap("90px");
                        }
                    }}
                >
                    {snap == 1 && (
                        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/80" />
                    )}

                    <Drawer.Portal>
                        <Drawer.Content className="bg-white flex z-50 flex-col fixed bottom-0 left-0 right-0 max-h-[100%] rounded-t-[10px]">
                            <div className="mx-auto mt-4 h-8 w-[100px] rounded-full bg-muted" />
                            <div
                                className={cn(
                                    "grid gap-1.5 p-4 text-center sm:text-left h-[70px]"
                                )}
                            >
                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Поиск по Названию ЖК, застройщика, округам, районам, метро"
                                        className="flex-1 h-10"
                                        onFocus={() => {
                                            setSnap(1);
                                        }}
                                    />
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <Button size={"icon"}>
                                                <Menu />
                                            </Button>
                                        </SheetTrigger>
                                        <SheetContent className="sm:max-w-full overflow-y-auto max-w-full w-full">
                                            <SheetHeader>
                                                <SheetTitle>Фильтр</SheetTitle>
                                            </SheetHeader>
                                            <DirectoryFilter />
                                        </SheetContent>
                                    </Sheet>
                                </div>
                            </div>
                            <div
                                className={cn(
                                    "flex flex-col w-full p-4 pt-5 bg-muted gap-4",
                                    {
                                        "overflow-y-auto": snap === 1,
                                        "overflow-hidden": snap !== 1,
                                    }
                                )}
                            >
                                {data &&
                                    data.splice(1, 10).map((object, idx) => {
                                        return (
                                            <ObjectCard
                                                {...object}
                                                key={idx}
                                                editable
                                                selection={false}
                                                transferred={false}
                                                modalOpen={false}
                                            />
                                        );
                                    })}
                            </div>
                        </Drawer.Content>
                    </Drawer.Portal>
                </Drawer.Root>
            )}
        </div>
    );
};
