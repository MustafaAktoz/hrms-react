import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class SchoolService{
    url = ApiUrl + "schools/"

    add(school){
        axios.post(url+"add",school);
    }

    getAll(){
        return axios.get(url+"getAll");
    }
}