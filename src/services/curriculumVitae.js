import axios from "axios";
import { ApiUrl } from "../models/constants/urls";

export default class CurriculumVitae{
	url = ApiUrl + "curriculumVitaes/"

	add(curriculumVitae){
		axios.post(url+"add",curriculumVitae)
	}

	delete(curriculumVitae){
		axios.post(url+"delete",curriculumVitae)
	}

	getAll(){
		return axios.get(url+"getAll")
	}

	getByJobSeekerId(jobSeekerId){
		return axios.get(url+"getByJobSeekerId?jobSeekerId="+jobSeekerId)
	}
}