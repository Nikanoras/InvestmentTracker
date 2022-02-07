import { Route, Routes } from 'react-router-dom';
import './App.css';
import Investments from './Investments';
import NewInvestment from './NewInvestment/NewInvestment';
import AddTransaction from './transactions/add-transaction/AddTransaction';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Investments />}></Route>
            <Route path="new" element={<NewInvestment />} />
            <Route
                path=":investmentId/transactions"
                element={<AddTransaction />}
            >
                <Route path="new" element={<AddTransaction />} />
            </Route>
            <Route
                path="*"
                element={
                    <main style={{ padding: '1rem' }}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    );
}

export default App;
