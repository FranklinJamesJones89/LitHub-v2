function SignupForm(props) {
    return (
        <div className="signup-container">
          <form className="form">
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Confirm Password"/>
            <button className="signup-btn"type="submit">{props.button}</button>
            <p className="signup-notice">Already have an account? Sign in</p>
          </form>
        </div>
    )
};

export default SignupForm;
