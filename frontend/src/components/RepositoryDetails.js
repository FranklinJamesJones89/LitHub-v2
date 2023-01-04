import { useRepositoriesContext } from '../hooks/useRepositoriesContext';
import { useAuthContext } from '../hooks/useAuthContext';

// Date fns
import { formatDistanceToNow } from 'date-fns'

const RepositoryDetails = ({ repository }) => {
	const { dispatch } = useRepositoriesContext()
	const { user } = useAuthContext();
	
	const truncate = (str, n) => {
		return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
	}

	const handleClick = async () => {
		if (!user) {
			return
		}

		const response = await fetch('/api/repositories/' + repository._id, {
			method:'DELETE',
			headers: {
				'Authorization': `Bearer ${user.token}`
			}
		})	
		const json = await response.json()

		if (response.ok) {
			dispatch({type: 'DELETE_REPOSITORY',  payload: json})	
		}
	}

    return (
			<div className="container px-4 py-5" id="hanging-icons">
			<h2 className="pb-2 border-bottom"></h2>
			<div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
				<div className="col d-flex align-items-start">
					<div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
					</div>
					<div>
						<h3 className="fs-2">{repository.title}</h3>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
					</div>
					<div>
						<p>{truncate(repository.synopsis, 250)}</p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
					</div>
					<div>
						<p>🟠 {repository.genre}</p>
						<p>🟣 {repository.form}</p>
						<p>{formatDistanceToNow(new Date(repository.createdAt), { addSuffix: true })}</p>
						<button className='material-symbols-rounded' onClick={handleClick}>delete</button>
					</div>
				</div>
			</div>
  </div>

    )
};

export default RepositoryDetails;
