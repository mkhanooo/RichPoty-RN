import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const axiosUrl = axios.create()
axiosUrl.defaults.baseURL = "https://richpoty.bixosoft.com/api/private";
// axiosUrl.defaults.baseURL = "https://quora-server.herokuapp.com/api/private";
// axiosUrl.defaults.timeout = 35000;
axiosUrl.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers = {
                Authorization: 'Bearer ' + token,
                authorization: token,
                Accept: "multipart/form-data",
                "Content-Type": "multipart/form-data",  
                // Accept: "application/json, text/plain, /",
                // "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "access-control-allow-headers": "*",
                "access-control-allow-methods": "*",
                "access-control-allow-origin": "*",
            }
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export default axiosUrl

