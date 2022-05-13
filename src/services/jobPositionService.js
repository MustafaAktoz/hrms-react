import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class JobPositionService{
    url = ApiUrl + "jobPositions/"

    add(jobPosition){
        axios.post(url+"add",jobPosition);
    }

    getAll(){
        return axios.get(url+"getAll");
    }
} 