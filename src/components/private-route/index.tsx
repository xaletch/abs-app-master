import { EXPIRES_AT, USER_ID } from "@/constants/user";
import { Navigate } from "@tanstack/react-router";
import { isBefore } from "date-fns";
import { FC, PropsWithChildren } from "react";

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
    const userId = localStorage.getItem(USER_ID);
    const expiresAt = localStorage.getItem(EXPIRES_AT);

    if (
        userId &&
        expiresAt &&
        isBefore(new Date(), new Date(JSON.parse(expiresAt)))
    ) {
        return <>{children}</>;
    } else {
        localStorage.removeItem(USER_ID);
        localStorage.removeItem(EXPIRES_AT);
        return (
            <Navigate
                to="/login"
                search={{
                    from: location.pathname,
                }}
                from={location.pathname}
            />
        );
    }

    return <></>;
};
