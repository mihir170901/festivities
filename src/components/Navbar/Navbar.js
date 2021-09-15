import React,{useEffect} from 'react'
import { Link, useLocation, useHistory} from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    let history = useHistory();
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        history.push('/login');
    }

    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    },[location])

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mihir">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Festivity</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/home"?"active":""}`} aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/cart"?"active":""}`} to="/cart">Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/account"?"active":""}`} to="/account">Account</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/wishlist"?"active":""}`} to="/wishlist">Wishlist</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token')?<form className="d-flex">
                        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>: <button onClick={handleLogout} className="btn btn-primary"> Logout </button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
