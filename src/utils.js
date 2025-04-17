import { data } from "./constants";

export const getImageForItem = (name) => {
    const item = data.find(item => item.name === name);
    if (item) {
        return item.image.thumbnail;
    }
    return null;
};