import { useEffect, useState } from "react"
import JobAdvertisementService from "../../../services/jobAdvertisementService";

export default function JobAdvertisementDtos() {
    const [jobAdvertisementDtos, setJobAdvertisementDtos] = useState([])
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getDetails().then(response => setJobAdvertisementDtos(response.data.data));
    },[])

    return (
        <div>
            {
                jobAdvertisementDtos.map(ja => (
                    <div className="card" key={ja.id}>
                        <div className="card-body">
                            <h5 className="card-title">{ja.jobPositionName}</h5>
                            <a>{ja.companyName}</a>
                            <p>{ja.cityName}</p>
                            <p className="card-text">{ja.date} tarihinde yayınlandı</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}