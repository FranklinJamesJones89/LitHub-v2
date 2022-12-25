import { useAuthContext } from './useAuthContext'

export const useSignout = () => {
	const { dispatch } = useAuthContext()
	
	const signout = () => {
		// Remove user from storage
		localStorage.removeItem('user')

		// Dispatch sign out action
		dispatch({type: 'SIGNOUT'})
	}

	return {signout}
}
