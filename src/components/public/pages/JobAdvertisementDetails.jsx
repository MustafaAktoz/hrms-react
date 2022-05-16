import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import JobAdvertisementService from "../../../services/jobAdvertisementService";
import JobAdvertisementDetail from "./JobAdvertisementDetail";

export default function JobAdvertisementDetails() {
    const [jobAdvertisementDetailDtos, setJobAdvertisementDetailDtos] = useState([])
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getActiveDetails().then(response => setJobAdvertisementDetailDtos(response.data.data));
    }, [])

    const {id} = useParams()

    return (
        <div>
            <div className="row">
                <div className="col scroll">
                    {
                        jobAdvertisementDetailDtos.map(ja => (
                            <Link to={`/JobAdvertisementDtos/${ja.id}`} key={ja.id}>
                                <div className="card" key={ja.id}>
                                    <div className="card-body row">
                                        <img height={50} className="col-2" src="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg" />
                                        <div className="col">
                                            <h5 className="card-title">{ja.jobPositionName}</h5>
                                            <a>{ja.companyName}</a>
                                            <p>{ja.cityName}({ja.workingTypeName})</p>
                                            <p className="card-text">{ja.date} tarihinde yayınlandı</p>
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className="col scroll">
                    {
                        id?<JobAdvertisementDetail />:<div></div>
                    }
                </div>
            </div>
        </div>
    )
}