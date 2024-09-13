import { baseApi } from "../Base";
import { CRM } from "./types";

const crmApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getObjectList: build.query<CRM[], void>({
            query: () => ({
                url: "/CRM",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetObjectListQuery } = crmApi;
