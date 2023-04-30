const navLinks = ["Menú", "Contacto"]

const Navbar = ({logo}) => {
    return (
        <nav className="nav-class">
            <img src={logo} alt="logo" className="nav-img"/>
            {navLinks.map((navLink)=>(
                <div key={navLink}>
                    <a href="/">{navLink}</a>
                </div>
            ))}
        </nav>
    )
}

export default Navbar