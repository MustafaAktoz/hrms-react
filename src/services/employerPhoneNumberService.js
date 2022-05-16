import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class EmployerPhoneNumberService{
    url = ApiUrl + "employerPhoneNumbers/"

    add(employerPhoneNumber){
        axios.post(this.url+"add",employerPhoneNumber);
    }

    getAll(){
        return axios.get(this.url+"getAll");
    }
} 