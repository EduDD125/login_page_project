import './navbar.css'

export default function Navbar({setSelectedOption}) {
    return(
        <div className="navbar-container">
            <button className="navbar-button" onClick={() => setSelectedOption("registration")}>Registrar-se</button>
            <button className="navbar-button" onClick={() => setSelectedOption("login")}>Login</button>
        </div>
    );
}