import { useAuthContext } from './useAuthContext'
import { useRepositoriesContext } from './useRepositoriesContext'

export const useSignout = () => {
	const { dispatch } = useAuthContext()
	const { dispatch: repositoriesDispatch } = useRepositoriesContext()
	
	const signout = () => {
		// Remove user from storage
		localStorage.removeItem('user')

		// Dispatch sign out action
		dispatch({type: 'SIGNOUT'})
		repositoriesDispatch({type: 'SET_REPOSITORIES', payload: null})
	}

	return {signout}
}
