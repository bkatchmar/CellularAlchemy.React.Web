import { NavLink, useNavigate } from 'react-router-dom'

function OffcanvasLink({ to, children }) {
    const navigate = useNavigate()

    const handleClick = () => {
        const offcanvas = document.getElementById('mobileNav')
        const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvas)
        if (bsOffcanvas) bsOffcanvas.hide()
        navigate(to)
    }

    return (
        <a className="nav-link" onClick={handleClick} style={{ cursor: 'pointer' }}>
            {children}
        </a>
    )
}

function Header() {
    const navLinkClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'

    return (
        <header>
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid flex-column align-items-center">
                    <a className="navbar-brand" href="#">
                        <img
                            src="https://cellularalchemyrx.com/wp-content/uploads/2023/07/CA-Logo-Transparent-White-Red_wCopy.png"
                            alt="Cellular Alchemy Logo"
                            className="d-md-none logo-mobile"
                        />
                        <img
                            src="https://cellularalchemyrx.com/wp-content/uploads/2023/07/CA-Logo-Transparent-White-Red_wCopy.png"
                            alt="Cellular Alchemy Logo"
                            className="d-none d-md-block logo-desktop"
                        />
                    </a>
                    <button
                        className="navbar-toggler d-md-none"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#mobileNav"
                        aria-controls="mobileNav"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Desktop nav - visible md and up */}
                    <div className="d-none d-md-block">
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink className={navLinkClass} to="/">HOME</NavLink></li>
                            <li className="nav-item"><NavLink className={navLinkClass} to="/biochemistry">BIOCHEMISTRY</NavLink></li>
                            <li className="nav-item"><NavLink className={navLinkClass} to="/biophysics">BIOPHYSICS</NavLink></li>
                            <li className="nav-item"><NavLink className={navLinkClass} to="/nutrition">NUTRITION</NavLink></li>
                            <li className="nav-item"><NavLink className={navLinkClass} to="/practitioners">PRACTITIONERS</NavLink></li>
                            <li className="nav-item"><NavLink className={navLinkClass} to="/consumers">CONSUMERS</NavLink></li>
                            <li className="nav-item"><NavLink className={navLinkClass} to="/network">NETWORK</NavLink></li>
                            <li className="nav-item"><NavLink className={navLinkClass} to="/contact">CONTACT</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Mobile offcanvas - slides in from right */}
            <div className="offcanvas offcanvas-end d-md-none" tabIndex="-1" id="mobileNav" aria-labelledby="mobileNavLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="mobileNavLabel">Cellular Alchemy Rx</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav">
                        <li className="nav-item"><OffcanvasLink to="/">HOME</OffcanvasLink></li>
                        <li className="nav-item"><OffcanvasLink to="/biochemistry">BIOCHEMISTRY</OffcanvasLink></li>
                        <li className="nav-item"><OffcanvasLink to="/biophysics">BIOPHYSICS</OffcanvasLink></li>
                        <li className="nav-item"><OffcanvasLink to="/nutrition">NUTRITION</OffcanvasLink></li>
                        <li className="nav-item"><OffcanvasLink to="/practitioners">PRACTITIONERS</OffcanvasLink></li>
                        <li className="nav-item"><OffcanvasLink to="/consumers">CONSUMERS</OffcanvasLink></li>
                        <li className="nav-item"><OffcanvasLink to="/network">NETWORK</OffcanvasLink></li>
                        <li className="nav-item"><OffcanvasLink to="/contact">CONTACT</OffcanvasLink></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header