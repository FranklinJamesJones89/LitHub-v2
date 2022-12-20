function Hero(props) {
	return (
		<>

			<div class="hero-container container col-xxl-8 px-4 py-5">
				<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
					<div class="col-10 col-sm-8 col-lg-6">
						<img src={props.src} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
					</div>
					<div class="col-lg-6">
						<h1 className="hero-header" class="display-5 fw-bold lh-1 mb-3">{props.heading}</h1>
						<p class="lead">{props.paragraph}</p>
						<div class="d-grid gap-2 d-md-flex justify-content-md-start">
							<button type="button" class="hero-btn btn btn-primary btn-lg px-4 me-md-2">Sign up for LitHub</button>
						</div>
					</div>
				</div>
				<div class="row flex-lg align-items-center g-5 py-5">
					<div class="col-10 col-sm-8 col-lg-6">
						<img className='study' src={props.src2} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
					</div>
					<div class="col-lg-6">
						<h1 className="hero-header" class="display-5 fw-bold lh-1 mb-3">{props.heading2}</h1>
						<p class="lead">{props.paragraph2}</p>
					</div>
				</div>
				<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
					<div class="col-10 col-sm-8 col-lg-6">
						<img src={props.src3} class="img-3 d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
					</div>
					<div class="col-lg-6">
						<h1 className="hero-header" class="display-5 fw-bold lh-1 mb-3">{props.heading3}</h1>
						<p class="lead">{props.paragraph3}</p>
					</div>
				</div>
			</div>
			
		</>
	)
};

export default Hero;
