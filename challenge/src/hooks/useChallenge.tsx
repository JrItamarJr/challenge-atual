import { useCallback, useState } from "react"
import { iChallenge } from "../interfaces";
import { ProdServices } from "../services/"

export const useChallenge = () => {
    const [tasks, setTaks] = useState<iChallenge[]>([]);

    const getAll = useCallback(async () => {
        const { status, data } = await ProdServices.getAll();

        if (status !== 200) throw new Error();

        setTaks(data);

    }, [])

    return {
        tasks,
        getAll
    }

}