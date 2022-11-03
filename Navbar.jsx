import { Link }  from "react-router-dom";


const Navbar = () => {
    return ( 
        <header className="header-container">
        <nav className="nav-bar">
            <h1 className="logo">QUOTEHUB RECORD</h1>
            <ul className="uList">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/leaderboard">Leaderboard</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </nav>
    </header>

     );
}
 
export default Navbar;