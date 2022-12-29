import {useState, useEffect } from 'react';

const Quotes = () => {
	const [quote, setQuote] = useState('');
	
	const getQuote = () => {
		fetch('https://type.fit/api/quotes')
			.then((res) => res.json())
			.then((data) => {
			let randomNum = Math.floor(Math.random() * data.length);
			setQuote(data[randomNum])
		});
	};

	useEffect(() => {
		getQuote();
	}, []);

	return (
		<>
			<span className='quote-text'>{quote.text}</span>
			<p className='quote-author'>{quote.author}</p>
			<button onClick={getQuote}>get quote</button>
		</>
	)
		
};

export default Quotes;
