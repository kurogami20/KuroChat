import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import Header from './components/header';
import { ThemeProvider } from './components/theme-provider';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<Header />
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>,
);
