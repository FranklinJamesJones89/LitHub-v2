import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RepositoriesContextProvider } from './context/RepositoryContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<RepositoriesContextProvider>
			<App />
		</RepositoriesContextProvider>
  </React.StrictMode>
);
