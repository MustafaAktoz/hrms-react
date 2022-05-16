import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class JobExperienceService{
    url = ApiUrl + "jobExperiences/"

    add(jobExperience){
        axios.post(this.url+"add",jobExperience);
    }

    getAll(){
        return axios.get(this.url+"getAll");
    }

    getAllAndSortByEndYearInReverse(){
        return axios.get(this.url+"getAllAndSortByEndYearInReverse");
    }
} 