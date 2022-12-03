import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand"><img className="parchment-img" src='./parchment.png' alt="parchment"/>LitHub</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" class="nav-link nav-home" aria-current="page">Sign up</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link">Sign in</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link">About</Link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
};

export default Nav;