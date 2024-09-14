import { useGetProfileQuery } from "@/api/User";
import { UpdateProfile } from "@/components/molecules/update-profile";
import { USER_ID } from "@/constants/user";

export const SettingPage = () => {
    const storage = localStorage.getItem(USER_ID);
    const userId = storage ? (JSON.parse(storage) as number) : null;

    const { data, isSuccess } = useGetProfileQuery(userId as number);

    if (isSuccess && data.access == "allow") {
        return <UpdateProfile user={data} />;
    }
    return <></>;
};
