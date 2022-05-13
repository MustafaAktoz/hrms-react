import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class LanguageService{
    url = ApiUrl + "languages/"

    add(language){
        axios.post(url+"add",language);
    }

    getAll(){
        return axios.get(url+"getAll");
    }
} 