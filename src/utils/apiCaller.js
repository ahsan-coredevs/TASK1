import axios from "axios";

const config= {
    headers: {

    },
    withCredentials: true
}
export const api= {
    get:async(endpoint)=>{
        try {
            const response = await axios.get(import.meta.env.VITE_SERVER_URL+endpoint,config);
            return {success: true, data:response.data};
            
        } catch (error) {
            console.log(error)
            return {success: false,data:error?.response?.data || 'Something went wrong' }
            
        }
    },

    post:async(endpoint, payload={})=>{
        try {
            const response = await axios.post(import.meta.env.VITE_SERVER_URL+endpoint,payload,config);
            return {success: true, data:response.data};
            
        } catch (error) {
            console.log(error)
            return {success: false,data:error?.response?.data || 'Something went wrong'}
            
        }
    },

    patch:async(endpoint, payload={})=>{
        try {
            const response = await axios.patch(import.meta.env.VITE_SERVER_URL+endpoint,payload,config);
            return {success: true, data:response.data};
            
        } catch (error) {
            console.log(error)
            return {success: false,data:error?.response?.data || 'Something went wrong'}
            
        }
    },
    delete:async(endpoint,)=>{
        try {
            const response = await axios.delete(import.meta.env.VITE_SERVER_URL+endpoint,config);
            return {success: true, data:response.data};
            
        } catch (error) {
            console.log(error)
            return {success: false,data:error?.response?.data || 'Something went wrong'}
            
        }
    }
}