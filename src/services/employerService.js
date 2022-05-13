import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class EmployerService{
    url = ApiUrl + "employers/"

    add(employer){
        axios.post(url+"add",employer);
    }

    getAll(){
        return axios.get(url+"getAll");
    }
} 