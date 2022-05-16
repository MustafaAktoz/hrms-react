import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class JobSeekerService{
    url = ApiUrl + "jobSeekers/"

    add(jobSeeker){
        axios.post(this.url+"add",jobSeeker);
    }

    getAll(){
        return axios.get(this.url+"getAll");
    }
} 