import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class JobAdvertisementService{
    url = ApiUrl+"jobAdvertisements/"

    add(jobAdvertisement){
        axios.post(this.url+"add", jobAdvertisement).then(response=>console.log(response.data.message))
    }

    updateStatus(updateStatusDto){
        axios.post(this.url+"updateStatus", updateStatusDto)
    }

    updateConfirmation(updateConfirmationDto){
        
        axios.post(this.url+"updateConfirmation", updateConfirmationDto).then(response=>console.log(response.data.message))
    }

    getById(id){
        return axios.get(this.url+"getById?id="+id)
    }

    getAll(){
        return axios.get(this.url+"getAll")
    }

    getUnconfirmedDetails(){
        return axios.get(this.url+"getUnconfirmedDetails")
    }

    getDetails(){
        return axios.get(this.url+"getDetails")
    }

    getActiveDetails(){
        return axios.get(this.url+"getActiveDetails")
    }

    getDetailById(id){
        return axios.get(this.url+"getDetailById?id="+id)
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