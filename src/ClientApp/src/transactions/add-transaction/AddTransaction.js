import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function AddTransaction() {
    const [shares, setShares] = useState('');
    const [pricePerShare, setPricePerShare] = useState('');
    const [purchasedOn, setPurchasedOn] = useState('');
    let navigate = useNavigate();
    let params = useParams();

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let url = `https://localhost:7185/api/Investments/${params.investmentId}/transactions`;
        let options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                shares: shares,
                pricePerShare: pricePerShare,
                purchasedOn: purchasedOn,
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
                Shares:
                <input
                    type="number"
                    name="name"
                    value={shares}
                    onChange={(e) => setShares(e.target.value)}
                />
            </label>
            <label>
                Price per Share:
                <input
                    type="number"
                    name="pricePerShare"
                    value={pricePerShare}
                    onChange={(e) => setPricePerShare(e.target.value)}
                />
            </label>
            <label>
                Purchased On:
                <input
                    type="date"
                    name="purchasedOn"
                    value={purchasedOn}
                    onChange={(e) => setPurchasedOn(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
            <Link to={'/'}>Back</Link>
        </form>
    );
}
