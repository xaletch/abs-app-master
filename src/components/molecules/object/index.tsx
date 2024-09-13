import ObjectItemImage from "@/assets/obejct-item.png";
import { GridTable, GridTableItem } from "@/components/atoms/grid-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    ArrowUp,
    CarFront,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    CircleAlert,
    CirclePlay,
    PersonStanding,
} from "lucide-react";
import { FC, MutableRefObject, useRef, useState } from "react";
import { useMedia } from "react-use";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import ObjectImage from "../../../assets/object-icon.png";

import { CRM } from "@/api/CRM/types";
import { EditObjectButton } from "@/components/atoms/edit-object-button";
import { ObjectPreviewSlider } from "@/components/atoms/object-preview-slider";
import { ObjectVideoButton } from "@/components/atoms/object-video-button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
interface ObjectProps extends CRM {
    modalOpen?: boolean;
    onCollapseClick?: () => void;
    editable: boolean;
    transferred: boolean;
    selection: boolean;
}

export const ObjectCard: FC<ObjectProps> = (props) => {
    const {
        modalOpen = false,
        onCollapseClick,
        editable,
        transferred,
        selection,
        ...objectProps
    } = props;

    const {
        area,
        ceiling,

        class: objectClass,
        content_about,
        content_location,

        dinamic,
        district,

        logo,
        metro,
        name,
        new: newS,
        parking,
        photo,
        price,
        promo,
        repair,
        tag,
        time,
        video,
    } = objectProps;
    const nextButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;
    const prevButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;
    const [objectDetailIsOpen, setObjectDetailIsOpen] = useState(false);
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
        null
    );

    const [detailSwiperInstance, setDetailSwiperInstance] =
        useState<SwiperClass | null>(null);

    const isMobile = useMedia("(max-width: 1200px)");
    const [open, setOpen] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const [isTransfered, setIsTransfered] = useState(transferred);
    if (isMobile) {
        return (
            <Sheet
                open={open}
                onOpenChange={(value) => {
                    if (modalOpen) {
                        setOpen(value);
                    } else {
                        setOpen(false);
                    }
                }}
            >
                <SheetTrigger asChild>
                    <div className="bg-white p-4 flex flex-col gap-4 text-[13px] cursor-pointer rounded-sm">
                        <div>
                            <Badge>
                                <ArrowUp />
                                {dinamic}
                            </Badge>
                        </div>

                        <div className="flex justify-between items-center flex-wrap gap-2">
                            <div className="flex gap-2 items-center flex-wrap">
                                <Avatar className="h-14 w-14">
                                    <AvatarFallback>{name}</AvatarFallback>
                                    <AvatarImage src={logo} />
                                </Avatar>
                                <div className="flex flex-col gap-0">
                                    <h1 className="text-sm font-medium">
                                        {name}
                                    </h1>
                                    <div className="flex gap-1 text-foreground/80 text-xs items-center flex-wrap">
                                        <p>СВАО / Реутов /</p>
                                        <div className="flex gap-1 items-center">
                                            <p>{metro}</p>
                                            <Separator
                                                orientation="vertical"
                                                className="h-4"
                                            />
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <CarFront className="w-5 h-5" />
                                            <p>{time}</p>
                                            <Separator
                                                orientation="vertical"
                                                className="h-4"
                                            />
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <PersonStanding className="w-5 h-5" />
                                            <p>{time}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Badge className="text-[11px]">{newS}</Badge>

                                <Tooltip>
                                    <TooltipTrigger>
                                        <Badge
                                            variant={"destructive"}
                                            className="gap-1 text-[11px]"
                                        >
                                            <CircleAlert className="w-3 h-3" />{" "}
                                            Акция
                                        </Badge>
                                    </TooltipTrigger>
                                    <TooltipContent className="w-64 pl-5">
                                        <h1 className="text-foreground/70 font-medium text-sm">
                                            Акции
                                        </h1>
                                        <ul className="text-foreground/50 text-xs list-disc">
                                            {promo.map((text, i) => {
                                                return <li key={i}>{text}</li>;
                                            })}
                                        </ul>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </div>
                        <div className="flex justify-between flex-wrap gap-2">
                            <div className="flex gap-2 items-center flex-wrap">
                                <div className="flex items-center gap-1">
                                    <p className="text-destructive font-medium">
                                        Апартаменты
                                    </p>
                                    <CircleAlert className="text-foreground/50 w-4 h-4" />
                                </div>
                                <Separator
                                    orientation="vertical"
                                    className="h-4"
                                />
                                <div className="flex items-center gap-2">
                                    <p className="text-foreground/50">
                                        Класс жилья:
                                    </p>
                                    <p className="text-foreground font-medium">
                                        {objectClass}
                                    </p>
                                </div>
                                <Separator
                                    orientation="vertical"
                                    className="h-4"
                                />
                                <div className="flex items-center gap-2">
                                    <p className="text-foreground/50">
                                        Отделка:
                                    </p>
                                    <p className="text-foreground font-medium">
                                        {repair}
                                    </p>
                                </div>
                                <Separator
                                    orientation="vertical"
                                    className="h-4"
                                />
                                <div className="flex items-center gap-2">
                                    <p className="text-foreground/50">
                                        Потолки:
                                    </p>
                                    <p className="text-foreground font-medium">
                                        {ceiling}
                                    </p>
                                </div>
                                <Separator
                                    orientation="vertical"
                                    className="h-4"
                                />
                                <div className="flex items-center gap-2">
                                    <p className="text-foreground/50">
                                        Парковка:
                                    </p>
                                    <p className="text-foreground font-medium">
                                        {parking}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <div className="h-full w-full flex flex-col gap-2">
                                <ObjectPreviewSlider photo={photo} />
                                <ObjectVideoButton videoSrc={video} />
                            </div>
                            <div className="flex gap-1 flex-wrap w-full">
                                {Object.keys(price).map((name, idx) => {
                                    return (
                                        <Button
                                            className="text-xs"
                                            onClick={() => {
                                                setActiveSlide(idx);
                                                swiperInstance?.slideTo(idx);
                                                detailSwiperInstance?.slideTo(
                                                    idx
                                                );
                                            }}
                                            variant={"secondary"}
                                            {...(activeSlide == idx && {
                                                variant: "default",
                                            })}
                                            key={idx}
                                        >
                                            {name}
                                        </Button>
                                    );
                                })}
                            </div>
                            <Swiper
                                className="w-full h-full"
                                onSwiper={(swiper) => {
                                    if (!swiperInstance) {
                                        setSwiperInstance(swiper);
                                    }
                                }}
                                spaceBetween={10}
                                slidesPerView={"auto"}
                                freeMode={true}
                                onSlideChange={(swiper) => {
                                    setActiveSlide(swiper.activeIndex);
                                }}
                                initialSlide={activeSlide}
                            >
                                {Object.values(price).map((grid) => {
                                    return (
                                        <SwiperSlide className="w-full h-full">
                                            <GridTable cols={6}>
                                                <GridTableItem></GridTableItem>
                                                <GridTableItem className="text-[12px] font-medium">
                                                    Ст
                                                </GridTableItem>
                                                <GridTableItem className="text-[12px] font-medium">
                                                    1кк
                                                </GridTableItem>
                                                <GridTableItem className="text-[12px] font-medium">
                                                    2кк
                                                </GridTableItem>
                                                <GridTableItem className="text-[12px] font-medium">
                                                    3кк
                                                </GridTableItem>
                                                <GridTableItem className="text-[12px] font-medium">
                                                    4кк
                                                </GridTableItem>

                                                {Object.keys(grid).map(
                                                    (name) => {
                                                        return (
                                                            <>
                                                                <GridTableItem className="text-[10px]">
                                                                    {name}
                                                                </GridTableItem>
                                                                <GridTableItem>
                                                                    <p className="font-medium text-[11px]">
                                                                        {
                                                                            grid[
                                                                                name
                                                                            ][
                                                                                "ст"
                                                                            ]
                                                                                .price
                                                                        }{" "}
                                                                        -{" "}
                                                                        {
                                                                            grid[
                                                                                name
                                                                            ][
                                                                                "ст"
                                                                            ]
                                                                                .square
                                                                        }
                                                                        м
                                                                        <sup>
                                                                            2
                                                                        </sup>
                                                                    </p>

                                                                    <p className="italic text-[9px]">
                                                                        {
                                                                            grid[
                                                                                name
                                                                            ][
                                                                                "ст"
                                                                            ]
                                                                                .offer
                                                                        }
                                                                    </p>
                                                                </GridTableItem>
                                                                <GridTableItem>
                                                                    <p className="font-medium text-[11px]">
                                                                        {
                                                                            grid[
                                                                                name
                                                                            ][
                                                                                "1кк"
                                                                            ]
                                                                                .price
                                                                        }{" "}
                                                                        -{" "}
                                                                        {
                                                                            grid[
                                                                                name
                                                                            ][
                                                                                "1кк"
                                                                            ]
                                                                                .square
                                                                        }
                                                                        м
                                                                        <sup>
                                                                            2
                                                                        </sup>
                                                                    </p>

                                                                    <p className="italic text-[9px]">
                                                                        {
                                                                            grid[
                                                                                name
                                                                            ][
                                                                                "1кк"
                                                                            ]
                                                                                .offer
                                                                        }
                                                                    </p>
                                                                </GridTableItem>
                                                                <GridTableItem>
                                                                    <p className="font-medium text-[11px]">
                                                                        {
                                                                            grid[
                                                                                name
                                                                            ][
                                                                                "2кк"
                                                                            ]
                                                                                .price
                                                                        }{" "}
                                                                        -{" "}
                                                                        {
                                                                            grid[
                                                                                name
                                                                            ][
                                                                                "2кк"
                                                                            ]
                                                                                .square
                                                                        }
                                                                        м
                                                                        <sup>
                                                                            2
                                                                        </sup>
                                                                    </p>

                                                                    <p className="italic text-[9px]">
                                                                        {
                                                                            grid[
                                                                                name
                                                                            ][
                                                                                "2кк"
                                                                            ]
                                                                                .offer
                                                                        }
                                                                    </p>
                                                                </GridTableItem>
                                                                <GridTableItem>
                                                                    <p className="font-medium text-[11px]">
                                                                        {
                                                                            grid[
                                                                                name
                                                                            ][
                                                                                "3кк"
                                                                            ]
                                                                                .price
                                                                        }{" "}
                                                                        -{" "}
                                                                        {
                                                                            grid[
                                                                                name
                                                                            ][
                                                                                "3кк"
                                                                            ]
                                                                                .square
                                                                        }
                                                                        м
                                                                        <sup>
                                                                            2
                                                                        </sup>
                                                                    </p>

                                                                    <p className="italic text-[9px]">
                                                                        {
                                                                            grid[
                                                                                name
                                                                            ][
                                                                                "3кк"
                                                                            ]
                                                                                .offer
                                                                        }
                                                                    </p>
                                                                </GridTableItem>
                                                                <GridTableItem>
                                                                    <p className="font-medium text-[11px]">
                                                                        {
                                                                            grid[
                                                                                name
                                                                            ][
                                                                                "4кк"
                                                                            ]
                                                                                .price
                                                                        }{" "}
                                                                        -{" "}
                                                                        {
                                                                            grid[
                                                                                name
                                                                            ][
                                                                                "4кк"
                                                                            ]
                                                                                .square
                                                                        }
                                                                        м
                                                                        <sup>
                                                                            2
                                                                        </sup>
                                                                    </p>

                                                                    <p className="italic text-[9px]">
                                                                        {
                                                                            grid[
                                                                                name
                                                                            ][
                                                                                "4кк"
                                                                            ]
                                                                                .offer
                                                                        }
                                                                    </p>
                                                                </GridTableItem>
                                                            </>
                                                        );
                                                    }
                                                )}
                                            </GridTable>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                                <h3 className="font-medium text-sm">
                                    Особенности
                                </h3>
                                <div className="flex gap-2 flex-wrap">
                                    <Button variant={"secondary"}>Река</Button>
                                    <Button variant={"secondary"}>Пруд</Button>
                                    <Button variant={"secondary"}>
                                        Лесопарк
                                    </Button>
                                    <Button variant={"secondary"}>
                                        Подземная парковка
                                    </Button>
                                    <Button variant={"secondary"}>
                                        Чистовая отделка
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-medium text-sm">
                                    Описание
                                </h3>
                                <p>
                                    В ЖК Прокшино можно найти квартиры с
                                    высокими потолками, а также уникальными
                                    планировками. В шаговой доступности есть все
                                    необходимые объекты инфраструктуры, а из
                                    окон открываются живописные вида на реку
                                    Сосновку. Комплекс расположен в
                                    непосредственной близости от крупных
                                    природных лесопарков с благоустроенными
                                    дорожками для пеших и велосипедных прогулок
                                    и зонами отдыха.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-medium text-sm">
                                    Расположение
                                </h3>
                                <p>
                                    ЖК "Прокшино" расположено всего в 10 минутах
                                    ходьбы от ст.м Прокшино, рядом с
                                    багоустроенной набережной. Рядом строится
                                    крупный бизнес-квартал с торговым центром и
                                    спортивно-событийный кластер с горнолыжным
                                    склоном.
                                </p>
                            </div>
                        </div>
                    </div>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-full overflow-y-auto">
                    <div className="grid grid-cols-1">
                        <div className="bg-white p-4 flex flex-col gap-4 text-[13px]">
                            <div>
                                <Badge>
                                    <ArrowUp />
                                    Цены выросли на 16% за полгода. В среднем
                                    продается 29 квартир в месяцю
                                </Badge>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center flex-wrap">
                                    <Avatar className="h-14 w-14">
                                        <AvatarFallback>
                                            ЖК Ромашка
                                        </AvatarFallback>
                                        <AvatarImage src={ObjectImage} />
                                    </Avatar>
                                    <div className="flex flex-col gap-0">
                                        <h1 className="text-sm font-medium">
                                            ЖК Ромашка
                                        </h1>
                                        <div className="flex gap-1 text-foreground/80 text-xs items-center">
                                            <p>СВАО / Реутов /</p>
                                            <div className="flex gap-1 items-center">
                                                <p>Сокол</p>
                                                <Separator
                                                    orientation="vertical"
                                                    className="h-4"
                                                />
                                            </div>
                                            <div className="flex gap-1 items-center">
                                                <CarFront className="w-5 h-5" />
                                                <p>3 мин.</p>
                                                <Separator
                                                    orientation="vertical"
                                                    className="h-4"
                                                />
                                            </div>
                                            <div className="flex gap-1 items-center">
                                                <PersonStanding className="w-5 h-5" />
                                                <p>39 мин.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2  flex-wrap">
                                    <Badge className="text-[11px]">
                                        Старт продаж
                                    </Badge>
                                    <Badge
                                        variant={"destructive"}
                                        className="gap-1 text-[11px]"
                                    >
                                        <CircleAlert className="w-3 h-3" />{" "}
                                        Старт продаж
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex justify-between flex-wrap">
                                <div className="flex gap-2 items-center flex-wrap">
                                    <div className="flex items-center gap-1 flex-wrap">
                                        <p className="text-destructive font-medium">
                                            Апартаменты
                                        </p>
                                        <CircleAlert className="text-foreground/50 w-4 h-4" />
                                    </div>
                                    <Separator
                                        orientation="vertical"
                                        className="h-4"
                                    />
                                    <div className="flex items-center gap-2">
                                        <p className="text-foreground/50">
                                            Класс жилья:
                                        </p>
                                        <p className="text-foreground font-medium">
                                            Бизнес
                                        </p>
                                    </div>
                                    <Separator
                                        orientation="vertical"
                                        className="h-4"
                                    />
                                    <div className="flex items-center gap-2">
                                        <p className="text-foreground/50">
                                            Отделка:
                                        </p>
                                        <p className="text-foreground font-medium">
                                            Да
                                        </p>
                                    </div>
                                    <Separator
                                        orientation="vertical"
                                        className="h-4"
                                    />
                                    <div className="flex items-center gap-2">
                                        <p className="text-foreground/50">
                                            Потолки:
                                        </p>
                                        <p className="text-foreground font-medium">
                                            3,1м
                                        </p>
                                    </div>
                                    <Separator
                                        orientation="vertical"
                                        className="h-4"
                                    />
                                    <div className="flex items-center gap-2">
                                        <p className="text-foreground/50">
                                            Парковка:
                                        </p>
                                        <p className="text-foreground font-medium">
                                            подземная
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-1 flex-wrap">
                                    <Button>Сдан</Button>
                                    <Button variant={"secondary"}>2024</Button>
                                    <Button variant={"secondary"}>2025</Button>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-2 items-center">
                                <div className="h-full w-full flex flex-col gap-2">
                                    <img
                                        src={ObjectItemImage}
                                        className="w-full h-full object-cover"
                                    />
                                    <Button
                                        variant={"ghost"}
                                        className="text-blue text-[13px] w-full justify-start hover:text-blue "
                                    >
                                        <CirclePlay className="w-4 h-4" /> Видео
                                        презентация
                                    </Button>
                                </div>
                                <GridTable cols={6}>
                                    <GridTableItem></GridTableItem>
                                    <GridTableItem>Ст</GridTableItem>
                                    <GridTableItem>1кк</GridTableItem>
                                    <GridTableItem>2кк</GridTableItem>
                                    <GridTableItem>3кк</GridTableItem>
                                    <GridTableItem>4кк</GridTableItem>
                                    <GridTableItem>Без отделки</GridTableItem>
                                    <GridTableItem>
                                        12,2 млн - 50м²
                                    </GridTableItem>
                                    <GridTableItem>
                                        12,2 млн - 50м²
                                    </GridTableItem>
                                    <GridTableItem>
                                        12,2 млн - 50м²
                                    </GridTableItem>
                                    <GridTableItem></GridTableItem>
                                    <GridTableItem>
                                        12,2 млн - 50м²
                                    </GridTableItem>
                                    <GridTableItem>Предчистовая</GridTableItem>
                                    <GridTableItem>
                                        12,2 млн - 50м²
                                    </GridTableItem>
                                    <GridTableItem></GridTableItem>
                                    <GridTableItem>
                                        12,2 млн - 50м²
                                    </GridTableItem>
                                    <GridTableItem>
                                        12,2 млн - 50м²
                                    </GridTableItem>
                                    <GridTableItem>
                                        12,2 млн - 50м²
                                    </GridTableItem>
                                    <GridTableItem>Чистовая</GridTableItem>
                                    <GridTableItem>
                                        12,2 млн - 50м²
                                    </GridTableItem>
                                    <GridTableItem></GridTableItem>
                                    <GridTableItem>
                                        12,2 млн - 50м²
                                    </GridTableItem>
                                    <GridTableItem>
                                        12,2 млн - 50м²
                                    </GridTableItem>
                                    <GridTableItem>
                                        12,2 млн - 50м²
                                    </GridTableItem>
                                </GridTable>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-medium text-sm">
                                        Особенности
                                    </h3>
                                    <div className="flex gap-2">
                                        <Button variant={"secondary"}>
                                            Река
                                        </Button>
                                        <Button variant={"secondary"}>
                                            Пруд
                                        </Button>
                                        <Button variant={"secondary"}>
                                            Лесопарк
                                        </Button>
                                        <Button variant={"secondary"}>
                                            Подземная парковка
                                        </Button>
                                        <Button variant={"secondary"}>
                                            Чистовая отделка
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-medium text-sm">
                                        Описание
                                    </h3>
                                    <p>
                                        В ЖК Прокшино можно найти квартиры с
                                        высокими потолками, а также уникальными
                                        планировками. В шаговой доступности есть
                                        все необходимые объекты инфраструктуры,
                                        а из окон открываются живописные вида на
                                        реку Сосновку. Комплекс расположен в
                                        непосредственной близости от крупных
                                        природных лесопарков с благоустроенными
                                        дорожками для пеших и велосипедных
                                        прогулок и зонами отдыха.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-medium text-sm">
                                        Расположение
                                    </h3>
                                    <p>
                                        ЖК "Прокшино" расположено всего в 10
                                        минутах ходьбы от ст.м Прокшино, рядом с
                                        багоустроенной набережной. Рядом
                                        строится крупный бизнес-квартал с
                                        торговым центром и спортивно-событийный
                                        кластер с горнолыжным склоном.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        );
    }

    return (
        <div
            className={cn(
                "bg-white p-4 pb-0 flex flex-col gap-1 text-[13px] relative text-xs",
                isTransfered && "bg-primary/10"
            )}
        >
            <div>
                <Badge className="text-xs">
                    <ArrowUp />
                    {dinamic}
                </Badge>
            </div>
            {editable && <EditObjectButton object={objectProps} />}
            {selection && (
                <div className="flex gap-1 absolute top-4 right-4">
                    <Checkbox
                        checked={isTransfered}
                        onCheckedChange={(value) => {
                            if (typeof value == "boolean") {
                                setIsTransfered(value);
                            }
                        }}
                    />
                    <label className="text-sm font-medium leading-none text-foreground">
                        Переведен
                    </label>
                </div>
            )}
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <Avatar className="h-14 w-14">
                        <AvatarFallback>{name}</AvatarFallback>
                        <AvatarImage src={logo} />
                    </Avatar>
                    <div className="flex flex-col gap-0">
                        <h1 className="text-sm font-medium">{name}</h1>
                        <div className="flex gap-1 text-foreground/80 text-xs items-center">
                            <p>{district}</p>
                            <div className="flex gap-1 items-center">
                                <p>{metro}</p>
                                <Separator
                                    orientation="vertical"
                                    className="h-4"
                                />
                            </div>
                            <div className="flex gap-1 items-center">
                                <CarFront className="w-5 h-5" />
                                <p>{time}</p>
                                <Separator
                                    orientation="vertical"
                                    className="h-4"
                                />
                            </div>
                            <div className="flex gap-1 items-center">
                                <PersonStanding className="w-5 h-5" />
                                <p>{time}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Badge className="text-[11px]">{newS}</Badge>

                    <Tooltip>
                        <TooltipTrigger>
                            <Badge
                                variant={"destructive"}
                                className="gap-1 text-[11px]"
                            >
                                <CircleAlert className="w-3 h-3" /> Акция
                            </Badge>
                        </TooltipTrigger>
                        <TooltipContent className="w-64 pl-5">
                            <h1 className="text-foreground/70 font-medium text-sm">
                                Акции
                            </h1>
                            <ul className="text-foreground/50 text-xs list-disc">
                                {promo.map((text, i) => {
                                    return <li key={i}>{text}</li>;
                                })}
                            </ul>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="flex items-center gap-1">
                        <p className="text-destructive font-medium">
                            Апартаменты
                        </p>
                        <Tooltip>
                            <TooltipTrigger>
                                <CircleAlert className="text-foreground/50 w-4 h-4" />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-52 text-center">
                                Только домены 2 или 3 уровня: site.ru или
                                moscow.ru, без возможности выбора страницы или
                                раздела
                            </TooltipContent>
                        </Tooltip>
                    </div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-2">
                        <p className="text-foreground/50">Класс жилья:</p>
                        <p className="text-foreground font-medium">
                            {objectClass}
                        </p>
                    </div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-2">
                        <p className="text-foreground/50">Отделка:</p>
                        <p className="text-foreground font-medium">{repair}</p>
                    </div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-2">
                        <p className="text-foreground/50">Потолки:</p>
                        <p className="text-foreground font-medium">{ceiling}</p>
                    </div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-2">
                        <p className="text-foreground/50">Парковка:</p>
                        <p className="text-foreground font-medium">{parking}</p>
                    </div>
                </div>
                <div className="flex gap-1">
                    {Object.keys(price).map((name, idx) => {
                        return (
                            <Button
                                className="text-xs"
                                onClick={() => {
                                    setActiveSlide(idx);
                                    swiperInstance?.slideTo(idx);
                                }}
                                variant={"secondary"}
                                {...(activeSlide == idx && {
                                    variant: "default",
                                })}
                                key={idx}
                            >
                                {name}
                            </Button>
                        );
                    })}
                </div>
            </div>
            <div className="grid grid-cols-[186px_1fr] gap-2 items-center">
                <div className="flex flex-col gap-2 h-full">
                    <Dialog
                        open={open}
                        onOpenChange={(value) => {
                            if (modalOpen) {
                                setOpen(value);
                            } else {
                                setOpen(false);
                            }
                        }}
                    >
                        <DialogTrigger>
                            <div className=" w-full flex flex-col gap-2 rounded-md">
                                <div className="w-full h-32">
                                    <ObjectPreviewSlider photo={photo} />
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-full w-full xl:max-w-[1629px] p-0 rounded-none  border-0 shadow-none overflow-y-auto h-full xl:h-auto">
                            <div className="grid grid-cols-1  xl:grid-cols-[730px_1fr]">
                                <div className="h-full w-full relative">
                                    <Swiper
                                        navigation={{
                                            prevEl: ".object-prev-button",
                                            nextEl: ".object-next-button",
                                        }}
                                        modules={[Navigation]}
                                        className="w-full h-full"
                                    >
                                        {photo.map((url, i) => {
                                            return (
                                                <SwiperSlide
                                                    className="w-full h-full"
                                                    key={i}
                                                >
                                                    <img
                                                        src={url}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </SwiperSlide>
                                            );
                                        })}
                                    </Swiper>
                                    <Button
                                        ref={prevButtonRef}
                                        className="absolute object-prev-button z-50 top-[50%] left-2"
                                        variant={"outline"}
                                    >
                                        <ChevronLeft />
                                    </Button>
                                    <Button
                                        ref={nextButtonRef}
                                        variant={"outline"}
                                        className="absolute object-next-button z-50 top-[50%] right-2 "
                                    >
                                        <ChevronRight />
                                    </Button>
                                </div>
                                <div className="bg-white p-4 flex flex-col gap-4 text-[13px]">
                                    <div>
                                        <Badge>
                                            <ArrowUp />
                                            Цены выросли на 16% за полгода. В
                                            среднем продается 29 квартир в
                                            месяцю
                                        </Badge>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-2 items-center flex-wrap">
                                            <Avatar className="h-14 w-14">
                                                <AvatarFallback>
                                                    {name}
                                                </AvatarFallback>
                                                <AvatarImage
                                                    src={ObjectImage}
                                                />
                                            </Avatar>
                                            <div className="flex flex-col gap-0">
                                                <h1 className="text-sm font-medium">
                                                    {name}
                                                </h1>
                                                <div className="flex gap-1 text-foreground/80 text-xs items-center">
                                                    <p>
                                                        {district} / {area} /
                                                    </p>
                                                    <div className="flex gap-1 items-center">
                                                        <p>{metro}</p>
                                                        <Separator
                                                            orientation="vertical"
                                                            className="h-4"
                                                        />
                                                    </div>
                                                    <div className="flex gap-1 items-center">
                                                        <CarFront className="w-5 h-5" />
                                                        <p>{time}</p>
                                                        <Separator
                                                            orientation="vertical"
                                                            className="h-4"
                                                        />
                                                    </div>
                                                    <div className="flex gap-1 items-center">
                                                        <PersonStanding className="w-5 h-5" />
                                                        <p>{time}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2  flex-wrap">
                                            <Badge className="text-[11px]">
                                                {newS}
                                            </Badge>
                                            <Badge
                                                variant={"destructive"}
                                                className="gap-1 text-[11px]"
                                            >
                                                <CircleAlert className="w-3 h-3" />{" "}
                                                Акция
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className="flex justify-between flex-wrap gap-2">
                                        <div className="flex gap-2 items-center flex-wrap">
                                            <div className="flex items-center gap-1 flex-wrap">
                                                <p className="text-destructive font-medium">
                                                    Апартаменты
                                                </p>
                                                <CircleAlert className="text-foreground/50 w-4 h-4" />
                                            </div>
                                            <Separator
                                                orientation="vertical"
                                                className="h-4"
                                            />
                                            <div className="flex items-center gap-2">
                                                <p className="text-foreground/50">
                                                    Класс жилья:
                                                </p>
                                                <p className="text-foreground font-medium">
                                                    {objectClass}
                                                </p>
                                            </div>
                                            <Separator
                                                orientation="vertical"
                                                className="h-4"
                                            />
                                            <div className="flex items-center gap-2">
                                                <p className="text-foreground/50">
                                                    Отделка:
                                                </p>
                                                <p className="text-foreground font-medium">
                                                    {repair}
                                                </p>
                                            </div>
                                            <Separator
                                                orientation="vertical"
                                                className="h-4"
                                            />
                                            <div className="flex items-center gap-2">
                                                <p className="text-foreground/50">
                                                    Потолки:
                                                </p>
                                                <p className="text-foreground font-medium">
                                                    {ceiling}
                                                </p>
                                            </div>
                                            <Separator
                                                orientation="vertical"
                                                className="h-4"
                                            />
                                            <div className="flex items-center gap-2">
                                                <p className="text-foreground/50">
                                                    Парковка:
                                                </p>
                                                <p className="text-foreground font-medium">
                                                    {parking}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-1 flex-wrap">
                                            {Object.keys(price).map(
                                                (name, idx) => {
                                                    return (
                                                        <Button
                                                            className="text-xs"
                                                            onClick={() => {
                                                                setActiveSlide(
                                                                    idx
                                                                );
                                                                swiperInstance?.slideTo(
                                                                    idx
                                                                );
                                                                detailSwiperInstance?.slideTo(
                                                                    idx
                                                                );
                                                            }}
                                                            variant={
                                                                "secondary"
                                                            }
                                                            {...(activeSlide ==
                                                                idx && {
                                                                variant:
                                                                    "default",
                                                            })}
                                                            key={idx}
                                                        >
                                                            {name}
                                                        </Button>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex  gap-2 items-center">
                                        <div className="h-full flex flex-col gap-2 max-w-[160px]">
                                            <img src={photo[0]} />

                                            <ObjectVideoButton
                                                videoSrc={video}
                                            />
                                        </div>
                                        <Swiper
                                            className="w-full h-full"
                                            onSwiper={(swiper) => {
                                                setDetailSwiperInstance(swiper);
                                            }}
                                            spaceBetween={10}
                                            slidesPerView={"auto"}
                                            freeMode={true}
                                            onSlideChange={(swiper) => {
                                                setActiveSlide(
                                                    swiper.activeIndex
                                                );
                                                swiperInstance?.slideTo(
                                                    swiper.activeIndex
                                                );
                                            }}
                                        >
                                            {Object.values(price).map(
                                                (grid) => {
                                                    return (
                                                        <SwiperSlide className="w-full h-full">
                                                            <GridTable cols={6}>
                                                                <GridTableItem></GridTableItem>
                                                                <GridTableItem className="text-[12px] font-medium">
                                                                    Ст
                                                                </GridTableItem>
                                                                <GridTableItem className="text-[12px] font-medium">
                                                                    1кк
                                                                </GridTableItem>
                                                                <GridTableItem className="text-[12px] font-medium">
                                                                    2кк
                                                                </GridTableItem>
                                                                <GridTableItem className="text-[12px] font-medium">
                                                                    3кк
                                                                </GridTableItem>
                                                                <GridTableItem className="text-[12px] font-medium">
                                                                    4кк
                                                                </GridTableItem>

                                                                {Object.keys(
                                                                    grid
                                                                ).map(
                                                                    (name) => {
                                                                        return (
                                                                            <>
                                                                                <GridTableItem className="text-[10px]">
                                                                                    {
                                                                                        name
                                                                                    }
                                                                                </GridTableItem>
                                                                                <GridTableItem>
                                                                                    <p className="font-medium text-[11px]">
                                                                                        {
                                                                                            grid[
                                                                                                name
                                                                                            ][
                                                                                                "ст"
                                                                                            ]
                                                                                                .price
                                                                                        }{" "}
                                                                                        -{" "}
                                                                                        {
                                                                                            grid[
                                                                                                name
                                                                                            ][
                                                                                                "ст"
                                                                                            ]
                                                                                                .square
                                                                                        }

                                                                                        м
                                                                                        <sup>
                                                                                            2
                                                                                        </sup>
                                                                                    </p>

                                                                                    <p className="italic text-[9px]">
                                                                                        {
                                                                                            grid[
                                                                                                name
                                                                                            ][
                                                                                                "ст"
                                                                                            ]
                                                                                                .offer
                                                                                        }
                                                                                    </p>
                                                                                </GridTableItem>
                                                                                <GridTableItem>
                                                                                    <p className="font-medium text-[11px]">
                                                                                        {
                                                                                            grid[
                                                                                                name
                                                                                            ][
                                                                                                "1кк"
                                                                                            ]
                                                                                                .price
                                                                                        }{" "}
                                                                                        -{" "}
                                                                                        {
                                                                                            grid[
                                                                                                name
                                                                                            ][
                                                                                                "1кк"
                                                                                            ]
                                                                                                .square
                                                                                        }

                                                                                        м
                                                                                        <sup>
                                                                                            2
                                                                                        </sup>
                                                                                    </p>

                                                                                    <p className="italic text-[9px]">
                                                                                        {
                                                                                            grid[
                                                                                                name
                                                                                            ][
                                                                                                "1кк"
                                                                                            ]
                                                                                                .offer
                                                                                        }
                                                                                    </p>
                                                                                </GridTableItem>
                                                                                <GridTableItem>
                                                                                    <p className="font-medium text-[11px]">
                                                                                        {
                                                                                            grid[
                                                                                                name
                                                                                            ][
                                                                                                "2кк"
                                                                                            ]
                                                                                                .price
                                                                                        }{" "}
                                                                                        -{" "}
                                                                                        {
                                                                                            grid[
                                                                                                name
                                                                                            ][
                                                                                                "2кк"
                                                                                            ]
                                                                                                .square
                                                                                        }

                                                                                        м
                                                                                        <sup>
                                                                                            2
                                                                                        </sup>
                                                                                    </p>

                                                                                    <p className="italic text-[9px]">
                                                                                        {
                                                                                            grid[
                                                                                                name
                                                                                            ][
                                                                                                "2кк"
                                                                                            ]
                                                                                                .offer
                                                                                        }
                                                                                    </p>
                                                                                </GridTableItem>
                                                                                <GridTableItem>
                                                                                    <p className="font-medium text-[11px]">
                                                                                        {
                                                                                            grid[
                                                                                                name
                                                                                            ][
                                                                                                "3кк"
                                                                                            ]
                                                                                                .price
                                                                                        }{" "}
                                                                                        -{" "}
                                                                                        {
                                                                                            grid[
                                                                                                name
                                                                                            ][
                                                                                                "3кк"
                                                                                            ]
                                                                                                .square
                                                                                        }

                                                                                        м
                                                                                        <sup>
                                                                                            2
                                                                                        </sup>
                                                                                    </p>

                                                                                    <p className="italic text-[9px]">
                                                                                        {
                                                                                            grid[
                                                                                                name
                                                                                            ][
                                                                                                "3кк"
                                                                                            ]
                                                                                                .offer
                                                                                        }
                                                                                    </p>
                                                                                </GridTableItem>
                                                                                <GridTableItem>
                                                                                    <p className="font-medium text-[11px]">
                                                                                        {
                                                                                            grid[
                                                                                                name
                                                                                            ][
                                                                                                "4кк"
                                                                                            ]
                                                                                                .price
                                                                                        }{" "}
                                                                                        -{" "}
                                                                                        {
                                                                                            grid[
                                                                                                name
                                                                                            ][
                                                                                                "4кк"
                                                                                            ]
                                                                                                .square
                                                                                        }

                                                                                        м
                                                                                        <sup>
                                                                                            2
                                                                                        </sup>
                                                                                    </p>

                                                                                    <p className="italic text-[9px]">
                                                                                        {
                                                                                            grid[
                                                                                                name
                                                                                            ][
                                                                                                "4кк"
                                                                                            ]
                                                                                                .offer
                                                                                        }
                                                                                    </p>
                                                                                </GridTableItem>
                                                                            </>
                                                                        );
                                                                    }
                                                                )}
                                                            </GridTable>
                                                        </SwiperSlide>
                                                    );
                                                }
                                            )}
                                        </Swiper>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="font-medium text-sm">
                                                Особенности
                                            </h3>
                                            <div className="flex gap-2">
                                                <Button variant={"secondary"}>
                                                    Река
                                                </Button>
                                                <Button variant={"secondary"}>
                                                    Пруд
                                                </Button>
                                                <Button variant={"secondary"}>
                                                    Лесопарк
                                                </Button>
                                                <Button variant={"secondary"}>
                                                    Подземная парковка
                                                </Button>
                                                <Button variant={"secondary"}>
                                                    Чистовая отделка
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="font-medium text-sm">
                                                Описание
                                            </h3>
                                            <p>
                                                В ЖК Прокшино можно найти
                                                квартиры с высокими потолками, а
                                                также уникальными планировками.
                                                В шаговой доступности есть все
                                                необходимые объекты
                                                инфраструктуры, а из окон
                                                открываются живописные вида на
                                                реку Сосновку. Комплекс
                                                расположен в непосредственной
                                                близости от крупных природных
                                                лесопарков с благоустроенными
                                                дорожками для пеших и
                                                велосипедных прогулок и зонами
                                                отдыха.
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="font-medium text-sm">
                                                Расположение
                                            </h3>
                                            <p>
                                                ЖК "Прокшино" расположено всего
                                                в 10 минутах ходьбы от ст.м
                                                Прокшино, рядом с багоустроенной
                                                набережной. Рядом строится
                                                крупный бизнес-квартал с
                                                торговым центром и
                                                спортивно-событийный кластер с
                                                горнолыжным склоном.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                    <ObjectVideoButton videoSrc={video} />
                </div>

                <Swiper
                    className="w-full h-full"
                    onSwiper={(swiper) => {
                        if (!swiperInstance) {
                            setSwiperInstance(swiper);
                        }
                    }}
                    spaceBetween={10}
                    slidesPerView={"auto"}
                    freeMode={true}
                    onSlideChange={(swiper) => {
                        setActiveSlide(swiper.activeIndex);
                    }}
                    initialSlide={activeSlide}
                >
                    {Object.values(price).map((grid) => {
                        return (
                            <SwiperSlide className="w-full h-full">
                                <GridTable cols={6}>
                                    <GridTableItem></GridTableItem>
                                    <GridTableItem className="text-[12px] font-medium">
                                        Ст
                                    </GridTableItem>
                                    <GridTableItem className="text-[12px] font-medium">
                                        1кк
                                    </GridTableItem>
                                    <GridTableItem className="text-[12px] font-medium">
                                        2кк
                                    </GridTableItem>
                                    <GridTableItem className="text-[12px] font-medium">
                                        3кк
                                    </GridTableItem>
                                    <GridTableItem className="text-[12px] font-medium">
                                        4кк
                                    </GridTableItem>

                                    {Object.keys(grid).map((name) => {
                                        return (
                                            <>
                                                <GridTableItem className="text-[10px]">
                                                    {name}
                                                </GridTableItem>
                                                <GridTableItem>
                                                    <p className="font-medium text-[11px]">
                                                        {grid[name]["ст"].price}{" "}
                                                        -{" "}
                                                        {
                                                            grid[name]["ст"]
                                                                .square
                                                        }
                                                        м<sup>2</sup>
                                                    </p>

                                                    <p className="italic text-[9px]">
                                                        {grid[name]["ст"].offer}
                                                    </p>
                                                </GridTableItem>
                                                <GridTableItem>
                                                    <p className="font-medium text-[11px]">
                                                        {
                                                            grid[name]["1кк"]
                                                                .price
                                                        }{" "}
                                                        -{" "}
                                                        {
                                                            grid[name]["1кк"]
                                                                .square
                                                        }
                                                        м<sup>2</sup>
                                                    </p>

                                                    <p className="italic text-[9px]">
                                                        {
                                                            grid[name]["1кк"]
                                                                .offer
                                                        }
                                                    </p>
                                                </GridTableItem>
                                                <GridTableItem>
                                                    <p className="font-medium text-[11px]">
                                                        {
                                                            grid[name]["2кк"]
                                                                .price
                                                        }{" "}
                                                        -{" "}
                                                        {
                                                            grid[name]["2кк"]
                                                                .square
                                                        }
                                                        м<sup>2</sup>
                                                    </p>

                                                    <p className="italic text-[9px]">
                                                        {
                                                            grid[name]["2кк"]
                                                                .offer
                                                        }
                                                    </p>
                                                </GridTableItem>
                                                <GridTableItem>
                                                    <p className="font-medium text-[11px]">
                                                        {
                                                            grid[name]["3кк"]
                                                                .price
                                                        }{" "}
                                                        -{" "}
                                                        {
                                                            grid[name]["3кк"]
                                                                .square
                                                        }
                                                        м<sup>2</sup>
                                                    </p>

                                                    <p className="italic text-[9px]">
                                                        {
                                                            grid[name]["3кк"]
                                                                .offer
                                                        }
                                                    </p>
                                                </GridTableItem>
                                                <GridTableItem>
                                                    <p className="font-medium text-[11px]">
                                                        {
                                                            grid[name]["4кк"]
                                                                .price
                                                        }{" "}
                                                        -{" "}
                                                        {
                                                            grid[name]["4кк"]
                                                                .square
                                                        }
                                                        м<sup>2</sup>
                                                    </p>

                                                    <p className="italic text-[9px]">
                                                        {
                                                            grid[name]["4кк"]
                                                                .offer
                                                        }
                                                    </p>
                                                </GridTableItem>
                                            </>
                                        );
                                    })}
                                </GridTable>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <Collapsible
                open={objectDetailIsOpen}
                onOpenChange={setObjectDetailIsOpen}
                className="w-full"
            >
                <CollapsibleContent>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-medium text-sm">Особенности</h3>
                            <div className="flex gap-2">
                                {tag.map((name) => {
                                    return (
                                        <Button
                                            variant={"secondary"}
                                            className="text-[11px]"
                                        >
                                            {name}
                                        </Button>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-medium text-sm">Описание</h3>
                            <p>{content_about}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-medium text-sm">
                                Расположение
                            </h3>
                            <p>{content_location}</p>
                        </div>
                    </div>
                </CollapsibleContent>
                <CollapsibleTrigger asChild>
                    <Button
                        variant={"ghost"}
                        className="w-full"
                        onClick={onCollapseClick}
                    >
                        {objectDetailIsOpen ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                </CollapsibleTrigger>
            </Collapsible>
        </div>
    );
};
