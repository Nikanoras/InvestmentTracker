import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NewInvestment(props) {
    const [name, setName] = useState('');
    const [stockSymbol, setStockSymbol] = useState('');
    const [platform, setPlatform] = useState('');
    let navigate = useNavigate();

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let url = 'https://localhost:7185/api/Investments';
        let options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                name: name,
                stockSymbol: stockSymbol,
                platform: platform,
            }),
        };
        let response = await fetch(url, options);
        let responseOK = response && response.ok;
        if (responseOK) {
            navigate('/');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Symbol:
                <input
                    type="text"
                    name="stockSymbol"
                    value={stockSymbol}
                    onChange={(e) => setStockSymbol(e.target.value)}
                />
            </label>
            <label>
                Platform:
                <input
                    type="text"
                    name="platform"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
            <Link to={'/'}>Back</Link>
        </form>
    );
}
