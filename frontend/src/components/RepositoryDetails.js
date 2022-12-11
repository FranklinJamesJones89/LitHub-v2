const RepositoryDetails = ({ repository }) => {
	const truncate = (str, n) => {
		return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
	}
    return (
			<div class="container px-4 py-5" id="hanging-icons">
			<h2 class="pb-2 border-bottom"></h2>
			<div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
				<div class="col d-flex align-items-start">
					<div class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
					</div>
					<div>
						<h3 class="fs-2">{repository.title}</h3>
					</div>
				</div>
				<div class="col d-flex align-items-start">
					<div class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
					</div>
					<div>
						<p>{truncate(repository.synopsis, 250)}</p>
					</div>
				</div>
				<div class="col d-flex align-items-start">
					<div class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
					</div>
					<div>
						<p>🟠 {repository.genre}</p>
						<p>🟣 {repository.form}</p>
					</div>
				</div>
			</div>
  </div>

    )
};

export default RepositoryDetails;
