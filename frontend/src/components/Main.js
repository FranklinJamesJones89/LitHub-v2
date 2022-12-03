import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div class="container-fluid main">
            <div class="row">
                <div class="main-txt col-lg-6">
                    <h1>Where Stories are Told</h1>
                    <p>The platform for writers to share their work with the world</p>
                    <div class="input-group input-group-sm">
                        <Link
                            to="/signup"
                            class="main-signup span-btn input-group-text"
                            id="inputGroup-sizing-lg">
                            Sign up for LitHub
                        </Link>
                        <input type="text" placeholder="Email Address" class="main-signup form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;