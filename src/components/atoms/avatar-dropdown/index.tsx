import { UserResponseSuccess } from "@/api/User/types";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ChevronDown, LogOut, User } from "lucide-react";
import { useState } from "react";

interface AvatarDropdownProps {
    user: UserResponseSuccess;
}

export const AvatarDropdown = (props: AvatarDropdownProps) => {
    const {
        user: { name, surname },
    } = props;

    const [open, setOpen] = useState(false);
    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <div className="flex h-full items-center gap-3 hover:bg-muted p-1 rounded-md cursor-pointer transition-colors">
                    <Button
                        variant="outline"
                        size="icon"
                        className="overflow-hidden rounded-full w-7 h-7"
                    >
                        <User className="w-5 h-5" />
                    </Button>
                    <div className="flex flex-col ">
                        <div className="flex gap-1">
                            <div className="text-sm">
                                {name} {surname}
                            </div>
                        </div>
                    </div>
                    <div>
                        <ChevronDown
                            className={cn(
                                "transition-all",
                                open && "rotate-180"
                            )}
                        />
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <Link to="/a/settings">
                    <DropdownMenuItem>Мой аккаунт</DropdownMenuItem>
                </Link>

                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Button
                        size={"sm"}
                        className="border-destructive border-2 bg-transparent text-destructive hover:text-white hover:bg-destructive w-full"
                    >
                        <LogOut />
                        Выйти
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
