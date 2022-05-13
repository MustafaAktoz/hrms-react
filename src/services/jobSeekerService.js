import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class JobSeekerService{
    url = ApiUrl + "jobSeekers/"

    add(jobSeeker){
        axios.post(url+"add",jobSeeker);
    }

    getAll(){
        return axios.get(url+"getAll");
    }
} 