import { Header } from "@/components/organisms/header";
import { Sidebar } from "@/components/organisms/sidebar";
import { useTheme } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import { FC, PropsWithChildren, useEffect, useState } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { setTheme } = useTheme();

    const onToggle = () => {
        if (collapsed) {
            setCollapsed(false);
        } else {
            setCollapsed(true);
        }
    };

    useEffect(() => {
        setTheme("light");
    }, [setTheme]);
    return (
        <div className="bg-muted">
            <div
                className={cn(
                    "grid grid-cols-1 lg:grid-cols-[175px_minmax(0px,1fr)] h-full transition-all grid-rows-1",
                    collapsed && "lg:grid-cols-[74px_minmax(0px,1fr)]"
                )}
            >
                <Sidebar collapsed={collapsed} onToggle={onToggle} />
                <div className="h-full flex flex-col  ">
                    <Header />
                    <main className="lg:p-2.5">{children}</main>
                </div>
            </div>
        </div>
    );
};
