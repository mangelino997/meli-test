import api from "./api";

const path = 'items';

export const itemsApi ={
    getItems: function (query) {
        console.log(query)
        return api.get(`${path}?search=${query}`);
    },
    getItemDescription: function (id) {
        return api.get(`${path}/${id}`);
    },
};