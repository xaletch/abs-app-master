import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { CirclePlay } from "lucide-react";
import { FC } from "react";

interface ObjectVideoButtonProps {
    videoSrc: string;
}

export const ObjectVideoButton: FC<ObjectVideoButtonProps> = (props) => {
    const { videoSrc } = props;
    return (
        <Dialog>
            <DialogTrigger>
                <Button
                    variant={"ghost"}
                    className="text-blue text-[13px] w-full justify-start hover:text-blue "
                >
                    <CirclePlay className="w-4 h-4" /> Видео презентация
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-7xl">
                <DialogHeader>
                    <DialogTitle>Видео презентация</DialogTitle>
                </DialogHeader>
                <video controls className="w-full h-full">
                    <source src={videoSrc} type="video/mp4" />
                </video>
                <DialogFooter>
                    <DialogClose>
                        <Button>Закрыть</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
