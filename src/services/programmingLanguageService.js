import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class ProgrammingLanguageService{
    url = ApiUrl + "programmingLanguages/"

    add(programmingLanguage){
        axios.post(url+"add",programmingLanguage);
    }

    getAll(){
        return axios.get(url+"getAll");
    }
}