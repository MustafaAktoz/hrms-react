import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class WorkingTimeService{
    url = ApiUrl + "workingTimes/"

    add(workingTime){
        axios.post(this.url+"add",workingTime);
    }

    getAll(){
        return axios.get(this.url+"getAll");
    }
}