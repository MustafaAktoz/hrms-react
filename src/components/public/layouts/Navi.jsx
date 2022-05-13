export default function Navi(){

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand">Navbar</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <div className="nav-link active" aria-current="page">Home</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">Link</div>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </div>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><div className="dropdown-item">Action</div></li>
                                    <li><div className="dropdown-item">Another action</div></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><div className="dropdown-item">Something else here</div></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</div>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}