const RepositoryDetails = ({ repository }) => {
    return (
        <div className="repository-details">
            <img className="avatar" src={repository.avatar}/>
            <h1>{repository.title}</h1>
            <p>{repository.synopsis}</p>
            <p>{repository.genre}</p>
            <p>{repository.form}</p>
        </div>
    )
};

export default RepositoryDetails;