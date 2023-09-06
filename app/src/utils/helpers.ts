import { IProductRequest, IAppData } from "../types/AppData/appdata.types";

const isObject = (data: any) => {
    return Object.prototype.toString.apply(data) === "[object Object]";
}

export const findNestedObject = (
    objectId: string | undefined, 
    data: IProductRequest[]): IProductRequest | null  => {

    const dataCopy = JSON.parse(JSON.stringify(data));

    if (dataCopy.id === objectId) return dataCopy;

    for (let i in dataCopy) {
        if (isObject(dataCopy[i as keyof IProductRequest])) {
            if (dataCopy[i].id === objectId) {
                return dataCopy[i]
            } else {
                return findNestedObject(objectId, dataCopy[i]);
            }
        } else if (Array.isArray(dataCopy[i])) {
            for (let j of dataCopy[i]) {
                let result = findNestedObject(objectId, j);
                if (result) {
                    return result;
                }

            }
        }
    }
    return null;
}