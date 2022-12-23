import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RepositoriesContextProvider } from './context/RepositoryContext'
import { AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<AuthContextProvider>
		<RepositoriesContextProvider>
			<App />
		</RepositoriesContextProvider>
		</AuthContextProvider>
  </React.StrictMode>
);
