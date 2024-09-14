import { useGetProfileQuery } from "@/api/User";
import { UpdateProfile } from "@/components/molecules/update-profile";
import { USER_ID } from "@/constants/user";

export const SettingPage = () => {
    // const storage = localStorage.getItem(USER_ID);
    // const userId = storage ? (JSON.parse(storage) as number) : null;

    // const { data, isSuccess } = useGetProfileQuery(userId as number);

    // if (isSuccess && data.access == "allow") {
    //     return <UpdateProfile user={data} />;
    // }
    const user = {
        user_id: 12345,
        access: "allow",
        name: "Kirill",
        surname: "Ivanov",
        second_name: "Sergeevich",
        city: "Moscow",
        tg: "@kirillivanov",
        email: "kirill.ivanov@example.com",
        alert: "No new alerts",
        role: "admin"
      };
      
    return <UpdateProfile user={user} />;
    // return <></>;
};
