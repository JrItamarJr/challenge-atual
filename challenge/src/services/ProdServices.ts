import { iChallenge } from "../interfaces";
import { Api } from "../providers";

const getAll = () => Api.get<iChallenge[]>('/products');

export const ProdServices = {
    getAll,
}

