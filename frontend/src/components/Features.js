function Feature(props) {
    return (
				<>
				<div className='vl2'></div>
        <div className="feature-container row">
	    			<h1 className="feature-container-header">{props.header}</h1>
            <div className="col-lg-4">
                <img className="feature-icon" src="./share.png" alt=""/>
                <h2 className="fw-normal">{props.title1}</h2>
                <p className="feature-paragraph">Create a publice or private repository and share whatever you've written today, good or bad.</p>
            </div>
            <div className="col-lg-4">
                <img className="feature-icon"src="./read.png" alt=""/>
                <h2 className="fw-normal">{props.title2}</h2>
                <p className="feature-paragraph">Read and offer critique on pieces shared by other writers.</p>
            </div>
            <div className="col-lg-4">
                <img className="feature-icon" src="./edit.png" alt=""/>
                <h2 className="fw-normal">{props.title3}</h2>
                <p className="feature-paragraph">Update a document previously shared with today's edits or revisions.</p>
            </div>
        </div>
				</>
    )
};

export default Feature;
