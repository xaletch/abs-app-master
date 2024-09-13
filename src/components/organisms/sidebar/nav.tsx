import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { Link } from "@tanstack/react-router";

import { FC, ReactNode } from "react";

interface NavProps {
  links: {
    title: string;
    icon: (props: { color: string }) => ReactNode;
    to: string;
    onClick?: () => void;
  }[];
  collapsed: boolean;
}

export const Nav: FC<NavProps> = (props) => {
  const { links, collapsed } = props;
  return (
    <div className="group flex flex-col gap-4 py-2 w-full">
      <nav className="grid gap-2 w-full items-center">
        {collapsed &&
          links.map((link, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Link
                  to={link.to}
                  className="w-full"
                  onClick={() => {
                    if (link.onClick) {
                      link.onClick();
                    }
                  }}
                >
                  {({ isActive }) => {
                    return (
                      <div
                        className={cn(
                          " flex items-center text-base font-medium gap-2.5 p-2.5 rounded-lg w-full",
                          isActive
                            ? "text-white bg-primary"
                            : "text-gray-500 bg-transparent"
                        )}
                      >
                        {link.icon({ color: isActive ? "white" : "gray" })}
                      </div>
                    );
                  }}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={10}>
                {link.title}
              </TooltipContent>
            </Tooltip>
          ))}
        {!collapsed &&
          links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="w-full"
              onClick={() => {
                if (link.onClick) {
                  link.onClick();
                }
              }}
            >
              {({ isActive }) => {
                return (
                  <div
                    className={cn(
                      " flex items-center text-base font-medium gap-2.5 p-2.5 rounded-lg w-full",
                      isActive
                        ? "text-white bg-primary"
                        : "text-gray-500 bg-transparent"
                    )}
                  >
                    {link.icon({ color: isActive ? "white" : "gray" })}
                    {link.title}
                  </div>
                );
              }}
            </Link>
          ))}
      </nav>
    </div>
  );
};
