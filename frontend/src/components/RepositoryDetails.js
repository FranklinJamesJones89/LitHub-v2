const RepositoryDetails = ({ repository }) => {
    return (
        <div class="container-fluid">
            <div class="repo-container row">
                <div className="col-lg-6">
                    <img className="avatar" src={repository.avatar} alt="" />
                </div>
                <div class="col-lg-6">
                    <div class="repo-container container px-4 py-5" id="hanging-icons">
                        <h3 class="pb-2 border-bottom">Pinned</h3>
                        <div class="repositories-box row g-4 py-5 row-cols-1 row-cols-lg-3">
                            <div class="col d-flex align-items-start">
                                <div>
                                    <h6 class="repo-title fs-5">{repository.title}</h6>
                                    <p>{repository.synopsis}</p>
                                    <p>🟣 {repository.genre}</p>
                                    <p>🟠 {repository.form}</p>
                                </div>
                            </div>
                            <div class="col d-flex align-items-start">
                                <div>
                                    <h6 class="repo-title fs-5">Featured title</h6>
                                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                </div>
                            </div>
                            <div class="col d-flex align-items-start">
                                <div>
                                    <h3 class="repo-title fs-5">Featured title</h3>
                                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                </div>
                            </div>
                        </div>
                        <div class="repositories-box row g-4 py-5 row-cols-1 row-cols-lg-3">
                            <div class="col d-flex align-items-start">
                                <div>
                                    <h6 class="repo-title fs-5">{repository.title}</h6>
                                    <p className="repo-item">{repository.synopsis}</p>
                                    <p>{repository.genre}</p>
                                    <p>{repository.form}</p>
                                </div>
                            </div>
                            <div class="col d-flex align-items-start">
                                <div>
                                    <h3 class="repo-title fs-5">Featured title</h3>
                                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                </div>
                            </div>
                            <div class="col d-flex align-items-start">
                                <div>
                                    <h3 class="repo-title fs-5">Featured title</h3>
                                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RepositoryDetails;