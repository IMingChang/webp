import axios from "axios";

const BaseUrl = "https://api.github.com/";
const options = {
    headers: {"content-type": "application/json"}
}
export default function api (endPoint){
    let url = BaseUrl + endPoint;
    return {
        create: newValue => axios.post(url, newValue, options),
        read:() => axios.get(url, options),
        readId: id => axios.get(url+id, options),  
        updata: (id, updataValue) => axios.put(url+id, updataValue, options),
        delete: id => axios.delete(url+id, options)
    }
}