import { Route, Routes } from "react-router-dom";
import AddJobAdvertisement from "./user/employer/AddJobAdvertisement";
import Navi from "./public/layouts/Navi";
import JobAdvertisementDetails from "./public/pages/JobAdvertisementDetails.jsx";
import UnconfirmedJobAdvertisementDetailList from "./admin/pages/lists/UnconfirmedJobAdvertisementDetailList";

export default function Dashboard() {

    return (
        <div>
            <Navi />
            <div className="container" style={{marginTop:60}}>
                <Routes>
                    <Route exact path="/" element={<JobAdvertisementDetails/>} />
                    <Route exact path="/jobAdvertisementDtos" element={<JobAdvertisementDetails/>} />
                    <Route exact path="/jobAdvertisementDtos/:id" element={<JobAdvertisementDetails/>} />
                    <Route exact path="/addJobAdvertisement" element={<AddJobAdvertisement/>} />
                    <Route exact path="/unconfirmedJobAdvertisementDetailList" element={<UnconfirmedJobAdvertisementDetailList/>} />
                    
                </Routes>
            </div>
        </div>
    )
}