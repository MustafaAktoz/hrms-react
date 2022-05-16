import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class CurriculumVitae{
	url = ApiUrl + "curriculumVitaes/"

	add(curriculumVitae){
		axios.post(this.url+"add",curriculumVitae)
	}

	delete(curriculumVitae){
		axios.post(this.url+"delete",curriculumVitae)
	}

	getAll(){
		return axios.get(this.url+"getAll")
	}

	getByJobSeekerId(jobSeekerId){
		return axios.get(this.url+"getByJobSeekerId?jobSeekerId="+jobSeekerId)
	}
}