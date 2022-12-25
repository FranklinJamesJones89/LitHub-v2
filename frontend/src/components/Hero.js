function Hero(props) {
	return (
		<>
			<div className='vl'></div>
			<div className="container col-xxl-8 px-4 py-5">
				<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
					<div className="col-10 col-sm-8 col-lg-6">
						<img src={props.src} className="word-document-img d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
					</div>
					<div className="col-lg-6">
						<h1 className="hero-header" className="display-5 fw-bold lh-1 mb-3">{props.heading}</h1>
						<p className="lead">{props.paragraph}</p>
						<div className="d-grid gap-2 d-md-flex justify-content-md-start">
							<button type="button" className="hero-btn btn btn-primary btn-lg px-4 me-md-2">Sign up for LitHub</button>
						</div>
					</div>
				</div>
				<div className='vl'></div>
				<div className="row flex-lg align-items-center g-5 py-5">
					<div className="col-10 col-sm-8 col-lg-6">
						<img className='study' src={props.src2} className="study d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
					</div>
					<div className="col-lg-6">
						<h1 className="hero-header" className="display-5 fw-bold lh-1 mb-3">{props.heading2}</h1>
						<p className="lead">{props.paragraph2}</p>
					</div>
				</div>
				<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
					<div className="col-10 col-sm-8 col-lg-6">
						<img src={props.src3} className="img-3 d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
					</div>
					<div className="col-lg-6">
						<h1 className="hero-header" className="display-5 fw-bold lh-1 mb-3">{props.heading3}</h1>
						<p className="lead">{props.paragraph3}</p>
					</div>
				</div>
			</div>
						
		</>
	)
};

export default Hero;
