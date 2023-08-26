import React, { useState, useEffect } from "react";

function RealCryptoDataComponent() {
    const [cryptoData, setCryptoData] = useState({ rates: {} });

    useEffect(() => {
        fetch("http://api.coinlayer.com/api/live?access_key=770dade76ce90d4737fb61368074f7f3")
            .then(response => response.json())
            .then(data => {
                setCryptoData(data);
            });
    }, []);

    return (
        <div className="container">
            <table className="table table-striped ">
                <thead className="thead-dark" >
                    <tr>
                        <th>Symbol of Crypto</th>
                        <th>Price of Crypto</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(cryptoData.rates).map(cryptoSymbol => (
                            <tr key={cryptoSymbol}>
                                <td>{cryptoSymbol}</td>
                                <td>{cryptoData.rates[cryptoSymbol]}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default RealCryptoDataComponent;






