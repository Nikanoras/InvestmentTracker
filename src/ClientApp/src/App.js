import { Route, Routes } from 'react-router-dom';
import './App.css';
import Investments from './Investments';
import NewInvestment from './NewInvestment/NewInvestment';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Investments />} />
            <Route path="/new" element={<NewInvestment />} />
        </Routes>
    );
}

export default App;
