const navLinks = ["Menú", "Contacto", "Reservar"]

const Header = ({logo}) => {
    return (
        <nav className="nav-class text-uppercase">
            <img src={logo} alt="logo" className="nav-img"/>
            {navLinks.map((navLink)=>(
                <div key={navLink}>
                    <a className="text-warning text-decoration-none" href="/">{navLink}</a>
                </div>
            ))}
        </nav>
    )
}

export default Header