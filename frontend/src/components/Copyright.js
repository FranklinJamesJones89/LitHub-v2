const CopyRight = () => {
	const date = new Date();
	const currentYear = date.getFullYear();
	
	return (
		<p className='copyright'>copyright ©️{currentYear}</p>
	)
};

export default CopyRight;
