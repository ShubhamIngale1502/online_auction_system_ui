import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../components/table.css';

const AuctionList = () => {
    const [auctions, setAuctions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAuctions();
    }, []);

    const fetchAuctions = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/v1/scedule/');
            setAuctions(response.data);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Auctions for Today</h2>
            {error && <p>Error: {error}</p>}
            <table className= "table1">
                <thead className= "head1">
                    <tr>
                        <th>Auction ID</th>
                        <th>Auction Date</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Increment Amount</th>
                    </tr>
                </thead>
                <tbody className= 'body1'>
                    {auctions.map(auction => (
                        <tr key={auction.auction_id}>
                            <td>{auction.auction_id}</td>
                            <td>{auction.auction_date}</td>
                            <td>{auction.auctio_start_time}</td>
                            <td>{auction.auctio_end_time}</td>
                            <td>{auction.increment_amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AuctionList;
