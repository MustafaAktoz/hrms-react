import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class WorkingTypeService{
    url = ApiUrl + "workingTypes/"

    add(workingType){
        axios.post(this.url + "add",workingType)
    }

    getAll(){
        return axios.get(this.url+"getAll")
    }
}