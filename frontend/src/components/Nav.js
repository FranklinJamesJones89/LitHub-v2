import { Link } from 'react-router-dom';
import { useSignout } from '../hooks/useSignout';

const Nav = (props) => {
	const { signout } = useSignout();
	
	const handleClick = () => {
		signout();		
	}
		
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><img className="parchment-img" src='./parchment.png' alt="parchment"/>LitHub</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link nav-home" aria-current="page">{props.profile}</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link nav-home" aria-current="page">{props.signup}</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signin" className="nav-link">{props.signin}</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">{props.about}</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">{props.overview}</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/repositories" className="nav-link">{props.repositories}</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="nav-link">{props.create}</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={handleClick}>{props.signout}</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
};

export default Nav;
