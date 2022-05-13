import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class CityService{
    url = ApiUrl + "cities/"

    add(city){
        axios.post(url+"add",city);
    }

    getAll(){
        return axios.get(url+"getAll");
    }
} 