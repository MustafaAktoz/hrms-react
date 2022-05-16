import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class JobPositionService{
    url = ApiUrl + "jobPositions/"

    add(jobPosition){
        axios.post(this.url+"add", jobPosition).then(response=>console.log(response.data.message)).catch(response=>console.log(response.data.message));
    }

    getAll(){
        return axios.get(this.url+"getAll");
    }
} 