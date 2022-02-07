/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const calculateChangePercentage = (invested, value) => {
    return ((value - invested) * 100) / invested;
};

const calculateChange = (invested, value) => {
    return value - invested;
};

export default function Investments() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [investments, setInvestments] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7185/api/Investments')
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setInvestments(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, []);
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Platform
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Actions
                                            </th>
                                            {/* <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Shares
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Invested
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Value
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Change
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Change %
                                        </th> */}
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {investments.map((investment) => (
                                            <tr
                                                key={investment.id}
                                                onDoubleClick={(e) =>
                                                    console.log(e)
                                                }
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {investment.stockSymbol}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {investment.name}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {investment.platform}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        <Link
                                                            to={`${investment.id}/transactions/new`}
                                                        >
                                                            Add Transaction
                                                        </Link>
                                                    </div>
                                                </td>
                                                {/* <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {investment.shares}
                                                    </div>
                                                </td> */}
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {/* $
                                                    {investment.invested.toFixed(
                                                        2,
                                                    )} */}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {/* <div className="text-sm text-gray-900">
                                                    ${investment.value}
                                                </div> */}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div
                                                        className={`text-sm ${
                                                            calculateChange(
                                                                investment.invested,
                                                                investment.value,
                                                            ) > 0
                                                                ? 'text-green-400'
                                                                : 'text-rose-400'
                                                        }`}
                                                    >
                                                        {/* $
                                                    {calculateChange(
                                                        investment.invested,
                                                        investment.value,
                                                    ).toFixed(2)} */}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div
                                                        className={`text-sm text-gray-900`}
                                                    >
                                                        {/* {calculateChangePercentage(
                                                        investment.invested,
                                                        investment.value,
                                                    ).toFixed(2)}
                                                    % */}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 m-2 text-sm leading-5 rounded-md font-semibold text-white">
                    <Link to="/new">New</Link>
                </button>
            </>
        );
    }
}
