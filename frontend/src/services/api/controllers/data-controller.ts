import { api } from "..";

export const dataController = {
    getData: () => {
        api.get('/eee')
    }
}