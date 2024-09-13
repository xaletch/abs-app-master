import { SonnerComp } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FC, PropsWithChildren } from "react";
import { ReduxProvider } from "./redux-provider";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ReduxProvider>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <TooltipProvider delayDuration={200}>
                    {children}
                </TooltipProvider>
                <SonnerComp />
            </ThemeProvider>
        </ReduxProvider>
    );
};
