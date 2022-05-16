import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class CityService{
    url = ApiUrl + "cities/"

    add(city){
        axios.post(this.url+"add",city);
    }

    getAll(){
        return axios.get(this.url+"getAll");
    }
} 