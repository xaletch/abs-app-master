import { baseApi } from "../Base";
import { UpdateUserRequest, UpdateUserResponse, UserResponse } from "./types";

const userApi = baseApi.injectEndpoints({
    endpoints(build) {
        return {
            getProfile: build.query<UserResponse, number>({
                query: (userId) => {
                    return {
                        url: "/CRM/user.php",
                        method: "POST",
                        body: JSON.stringify({
                            user_id: userId,
                        }),
                    };
                },
                providesTags: ["User"],
            }),

            updateProfile: build.mutation<
                UpdateUserResponse,
                UpdateUserRequest
            >({
                query: (data) => ({
                    url: "/CRM/user.php",
                    method: "POST",
                    body: JSON.stringify({
                        ...data,
                    }),
                }),
                invalidatesTags: ["User"],
            }),
        };
    },
});

export const { useGetProfileQuery, useUpdateProfileMutation } = userApi;
