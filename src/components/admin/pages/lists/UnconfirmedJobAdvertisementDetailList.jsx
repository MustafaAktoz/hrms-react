import { useEffect, useState } from "react"
import JobAdvertisementService from "../../../../services/jobAdvertisementService"
import ConfirmJobAdvertisement from "../../layouts/updates/ConfirmJobAdvertisement";

export default function UnconfirmedJobAdvertisementDetailList() {
    const [jobAdvertisementDetailDtos, setJobAdvertisementDetailDtos] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getUnconfirmedDetails().then(response => setJobAdvertisementDetailDtos(response.data.data));
    },[jobAdvertisementDetailDtos])

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Şirket</th>
                        <th>İş Pozisyonu</th>
                        <th>Şehir</th>
                        <th>Çalışma Tipi</th>
                        <th>Çalışma Zamanı</th>
                        <th>Min Maaş</th>
                        <th>Max Maaş</th>
                        <th>Pozisyon Adedi</th>
                        <th>Tarih</th>
                        <th>Sona Erme Tarihi</th>
                        <th>Açıklama</th>
                        <th>Eylemler</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobAdvertisementDetailDtos.map(ja => (
                            <tr>
                                <td>{ja.id}</td>
                                <td>{ja.companyName}</td>
                                <td>{ja.jobPositionName}</td>
                                <td>{ja.cityName}</td>
                                <td>{ja.workingTypeName}</td>
                                <td>{ja.workingTimeName}</td>
                                <td>{ja.minSalary}</td>
                                <td>{ja.maxSalary}</td>
                                <td>{ja.numberOfPositions}</td>
                                <td>{ja.date}</td>
                                <td>{ja.applicationDeadline??"Yok"}</td>
                                <td>{ja.description}</td>
                                <td><ConfirmJobAdvertisement id={ja.id}/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}