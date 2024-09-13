import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC, MutableRefObject, useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
interface ObjectPreviewSliderProps {
    photo: string[];
}

export const ObjectPreviewSlider: FC<ObjectPreviewSliderProps> = (props) => {
    const { photo } = props;
    const nextButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;
    const prevButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;
    const id = uuidv4();
    return (
        <div className="relative w-full h-full rounded-md overflow-hidden">
            <Swiper
                navigation={{
                    prevEl: `.object-prev-button-${id}`,
                    nextEl: `.object-next-button-${id}`,
                }}
                modules={[Navigation]}
                className="w-full h-full"
            >
                {photo.map((url, i) => {
                    return (
                        <SwiperSlide className="w-full h-full" key={i}>
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
                className={`absolute object-prev-button-${id} z-50 top-[50%] left-2 w-7 h-7 translate-y-[-49%]`}
                variant={"outline"}
                size={"icon"}
            >
                <ChevronLeft />
            </Button>
            <Button
                ref={nextButtonRef}
                variant={"outline"}
                className={`absolute object-next-button-${id} z-50 top-[50%] right-2 w-7 h-7 translate-y-[-49%]`}
                size={"icon"}
            >
                <ChevronRight />
            </Button>
        </div>
    );
};
