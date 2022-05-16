import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class EmployerService{
    url = ApiUrl + "employers/"

    add(employer){
        axios.post(this.url+"add",employer);
    }

    getAll(){
        return axios.get(this.url+"getAll");
    }
} 