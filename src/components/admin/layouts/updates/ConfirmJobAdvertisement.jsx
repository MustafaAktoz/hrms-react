import { useEffect } from "react"
import JobAdvertisementService from "../../../../services/jobAdvertisementService"

export default function ConfirmJobAdvertisement({id}) {
    let jobAdvertisementService = new JobAdvertisementService();

    function confirmJobAdvertisement(){
        jobAdvertisementService.updateConfirmation({id,confirmation:true})
    }
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Onayla
            </button>
            
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Onayla</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Bu ilanı onaylamak istediğinizden emin misiniz ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={confirmJobAdvertisement}>Onayla</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}