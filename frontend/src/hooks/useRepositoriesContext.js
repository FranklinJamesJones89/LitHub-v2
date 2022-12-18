import { RepositoriesContext } from '../context/RepositoryContext'
import { useContext } from 'react'

export const useRepositoriesContext = () => {
	const context = useContext(RepositoriesContext)
	
	if (!context) {
		throw Error('useRepositoriesContext must be used inside a RepositoriesContextProvider')
	}

	return context
}
