import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../components/table.css';

const AuctionDetails = () => {
    const { auctionId } = useParams();
    const [auctionData, setAuctionData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/v1/bids/${auctionId}`);
                setAuctionData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching auction details:', error);
            }
        };
        fetchData();
    }, [auctionId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!auctionData) {
        return <p>No data available for this auction ID.</p>;
    }

    return (
        <div>
            <h2>Auction Details</h2>
            <table className="table1">
                <tbody className='tbody1'>
                    <tr>
                        <td>Auction ID:</td>
                        <td>{auctionData.auction_id}</td>
                    </tr>
                    <tr>
                        <td>Auction Date:</td>
                        <td>{auctionData.auction_date}</td>
                    </tr>
                    <tr>
                        <td>Start Time:</td>
                        <td>{auctionData.auctio_start_time}</td>
                    </tr>
                    <tr>
                        <td>End Time:</td>
                        <td>{auctionData.auctio_end_time}</td>
                    </tr>
                    <tr>
                        <td>Increment Amount:</td>
                        <td>{auctionData.increment_amount}</td>
                    </tr>
                </tbody>
            </table>
            {/* Render bids if available */}
            {auctionData.allauctionbids.length > 0 && (
                <div>
                    <h3>Bids</h3>
                    <table className="table1">
                        <thead className= 'thead1'>
                            <tr>
                                <th>Bid Amount</th>
                                {/* Add other bid details as table headers if needed */}
                            </tr>
                        </thead>
                        <tbody className= "tbody1">
                            {auctionData.allauctionbids.map(bid => (
                                <tr key={bid.id}>
                                    <td>{bid.bid_amount}</td>
                                    {/* Render other bid details as table cells if needed */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AuctionDetails;
