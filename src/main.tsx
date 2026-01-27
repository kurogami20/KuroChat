import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import Header from './components/header';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Header />
		</BrowserRouter>
	</StrictMode>,
);
