export interface CRM {
    city: string;
    region: string;
    developer: string;
    name: string;
    logo: string;
    priority: number;
    district: string;
    area: string;
    metro: string;
    delivery: string;
    time: string;
    address: string;
    class: string;
    appartament: number;
    euroformat: number;
    repair: string;
    new: string;
    parking: string;
    ceiling: string;
    dinamic: string;
    finish: string;
    photo: string[];
    video: string;
    promo: string[];
    tag: string[];
    content_about: string;
    content_location: string;
    price: Record<
        string,
        Record<
            string,
            Record<
                string,
                {
                    price: string;
                    square: string;
                    offer: string;
                }
            >
        >
    >;
}
