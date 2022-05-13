import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class JobAdvertisementService{
    url = ApiUrl+"jobAdvertisements/"

    add(jobAdvertisement){
        axios.post(this.url+"add",jobAdvertisement);
    }

    updateStatus(jobAdvertisement){
        axios.post(this.url+"updateStatus",jobAdvertisement)
    }

    getById(id){
        return axios.get(this.url+"getById?id="+id)
    }

    getAll(){
        return axios.get(this.url+"getAll")
    }

    getDetails(){
        return axios.get(this.url+"getDetails")
    }

    getDetailsByStatus(){
        return axios.get(this.url+"getDetailsByStatus")
    }

    getActiveDetailsByDate(){
        return axios.get(this.url+"getActiveDetailsByDate")
    }

    getActiveDetailsByEmployerUserId(){
        return axios.get(this.url+"getActiveDetailsByEmployerUserId")
    }
}