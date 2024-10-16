import logo from '../images/logo.svg'
import "../styles/Navbar.css"
export default function Navbar(props) {
    return (<header>
        <nav  className={props.darkMode ? "dark" : ""}>
            <div className='logo-bloc'>
                <img src={logo} className="App-logo" alt="logo" />
                <h3>ReactFacts</h3>
            </div>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>


        </nav>
    </header>);
}