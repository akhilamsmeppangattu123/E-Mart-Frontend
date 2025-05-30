import axios from "axios";
import { BASE_URL } from "../utils/url";
import { getToken } from "../utils/storageHandler";
const token = getToken()

export const orderaddAPI = async (data) => {
    const token = getToken()
    const response = await axios.post(`${BASE_URL}/order/add`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true
    });
    return response.data
}

export const orderviewallAPI = async () => {
    const response = await axios.get(`${BASE_URL}/vendor/orders`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true
    });
    return response.data;
}

export const orderviewAPI = async () => {
    const response = await axios.get(`${BASE_URL}/order/view`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true
    });
    return response.data
}

export const orderviewOneAPI = async (data) => {
    
    console.log(data);
    
    const response = await axios.get(`${BASE_URL}/order/viewone/${data}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true
    });
    return response.data
} 

export const ordercancelAPI = async (data) => {
    const token = getToken()
console.log(data);

    const response = await axios.post(`${BASE_URL}/order/cancel`, data
    , {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        
    });
    return response.data
}

export const orderupdateAPI = async (data) => {
    console.log(data);
    
    const response = await axios.put(`${BASE_URL}/vendor/update`, data
    , {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true
    });
    return response.data
}
