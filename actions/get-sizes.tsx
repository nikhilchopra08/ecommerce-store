import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSize = async (): Promise<Size[]> => {
    const res = await fetch(URL);
    if (!res.ok) {
        throw new Error('Failed to fetch sizes');
    }
    const sizes: Size[] = await res.json();
    return sizes;
};

export default getSize;
