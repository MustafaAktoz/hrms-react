import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class ProgrammingLanguageService{
    url = ApiUrl + "programmingLanguages/"

    add(programmingLanguage){
        axios.post(this.url+"add",programmingLanguage);
    }

    getAll(){
        return axios.get(this.url+"getAll");
    }
}