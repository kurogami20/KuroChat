import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import Header from './components/header';
import { ThemeProvider } from './components/theme-provider';
import Home from './pages/home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

createRoot(document.getElementById('root')!).render(
	
		<BrowserRouter>
			<QueryClientProvider client={new QueryClient()}>
				<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
					<Header />
					<main className="mx-100">
						<Routes>
							<Route path="/" element={<Home />} />
						</Routes>
					</main>
				</ThemeProvider>
			</QueryClientProvider>
		</BrowserRouter>

);
