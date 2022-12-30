import './App.css';
import Booking from './components/ShowSeat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Booking />} />
			</Routes>
		</BrowserRouter>
	);
}
