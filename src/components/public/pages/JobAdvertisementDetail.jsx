import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import JobAdvertisementService from "../../../services/jobAdvertisementService"

export default function JobAdvertisementDetail() {
    const [jobAdvertisementDetailDto, setJobAdvertisementDetailDto] = useState({})

    const { id } = useParams()

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getDetailById(id).then(response => setJobAdvertisementDetailDto(response.data.data));
    }, [id])

    function salaryScale(){
        if(jobAdvertisementDetailDto.minSalary&&jobAdvertisementDetailDto.maxSalary){
            return(
                <div>
                    <strong>Ödeme Aralığı</strong>
                    <p>{jobAdvertisementDetailDto.minSalary}-{jobAdvertisementDetailDto.maxSalary} TL</p>
                </div>
            )
        }else{
            return(
                <div>
                    <strong>Ödeme aralığı mevcut değil</strong>
                    <p>Şu an için maaş bilgileri mevcut değil</p>
                </div>
            )
        }
    }

    return (
        <div>
            <h2>{jobAdvertisementDetailDto.jobPositionName}</h2>
            <p>{jobAdvertisementDetailDto.companyName} - {jobAdvertisementDetailDto.cityName}({jobAdvertisementDetailDto.workingTypeName})</p>
            <p>{jobAdvertisementDetailDto.workingTimeName}</p>
            <p>
            <button className="btn btn-primary">Kolay Başvuru</button>
            <button className="btn btn-outline-primary ms-1">Kaydet</button>
            </p>
            <p>{jobAdvertisementDetailDto.description}</p>
            <p>{salaryScale()}</p>
        </div>
    )
}