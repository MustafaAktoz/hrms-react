import Navi from "./layouts/Navi";
import JobAdvertisementDtos from "./pages/JobAdvertisementDtos.jsx";

export default function Dashboard() {

    return (
        <div>
            <Navi/>
            <div className="container">
                <JobAdvertisementDtos/>
            </div>  
        </div>
    )
}