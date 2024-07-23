import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColor = async (): Promise<Color[]> => {
    const res = await fetch(URL);
    if (!res.ok) {
        throw new Error('Failed to fetch colors');
    }
    const colors: Color[] = await res.json();
    return colors;
};

export default getColor;
