import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import Header from './components/header';
import { ThemeProvider } from './components/theme-provider';
import Home from './pages/home';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>,
);
