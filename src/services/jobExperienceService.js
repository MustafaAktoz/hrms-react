import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class JobExperienceService{
    url = ApiUrl + "jobExperiences/"

    add(jobExperience){
        axios.post(url+"add",jobExperience);
    }

    getAll(){
        return axios.get(url+"getAll");
    }

    getAllAndSortByEndYearInReverse(){
        return axios.get(url+"getAllAndSortByEndYearInReverse");
    }
} 