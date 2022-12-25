import { createContext, useReducer, useEffect } from 'react';

export const RepositoriesContext = createContext();

export const repositoriesReducer = (state, action) => {
	switch (action.type) {
		case 'SET_REPOSITORIES':
			return {
				repositories: action.payload
			}
		case 'CREATE_REPOSITORY':
			return {
				repositories: [action.payload, ...state.repositories]
			}
		case 'DELETE_REPOSITORY':
			return {
				repositories: state.repository.filter((r) => r._id !== action.payload._id)
			}
		default:
			return state;
	}
}

export const RepositoriesContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(repositoriesReducer, {
		repositories: null
	});

	useEffect(() => {}, [])
		const repositories = JSON.parse(localStorage.getItem('repositories'))
 	
	return (
		<RepositoriesContext.Provider value={{...state, dispatch}}>
			{ children }		
		</RepositoriesContext.Provider>
	)
};

