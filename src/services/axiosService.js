import axiosConfig from "../utils/config/axios.config";

export default function getNewJoke(){
    return axiosConfig.get('/jokes/random',{
        validateStatus: function (status){ //Resolve only if status code is less than 500
            return status < 500; 
        }
    })
}