import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="container-fluid main">
            <div className="row">
                <div className="main-txt col-lg-6">
                    <h1 className="main-header">Where Stories are Told</h1>
                    <p>The platform for writers to share their work with the world</p>
                    <div className="input-group input-group-sm">
                        <Link
                            to="/signup"
                            className="main-signup span-btn input-group-text"
                            id="inputGroup-sizing-lg">
                            Sign up for LitHub
                        </Link>
                        <input type="text" placeholder="Email Address" className="main-signup form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
