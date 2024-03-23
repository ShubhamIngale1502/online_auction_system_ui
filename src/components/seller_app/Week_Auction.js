import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Week_Auctions = () => {
    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        fetchAuctions();
    }, []);

    const fetchAuctions = () => {
        
            axios.get('http://127.0.0.1:8000/v1/thisweek/').then(
            (response)=> {
                console.log(response.data)
                setAuctions(response.data)
            }
            ).catch(error => {
            console.error('Error fetching auctions:', error);
        })
    };

    // Filter auctions for one week from the current date
    


    return (
        <div>
            <h2 className='fw-bold mx-auto w-50'>Auctions In Current Upcoming Week</h2>
            <table  className='table table-dark'>
                <thead>
                    <tr>
                        <th> product </th>
                        <th>Auction ID</th>
                        <th>Auction Date</th>
                        <th>auctio_start_time</th>
                        <th>auctio_end_time</th> 
                        <th>increment_amount</th>
                        
                    </tr>
                </thead>
                <tbody className='table-dark'>
                    {auctions.map(auction => (
                        <tr key={auction.auction_id}>
                            <td>{auction.product}</td>
                            <td>{auction.auction_id}</td>
                            <td>{auction.auction_date}</td>
                            <td>{auction.auctio_start_time}</td>
                            <td>{auction.auctio_end_time}</td>
                            <td>{auction.increment_amount}</td>
                            {/* Add more table cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Week_Auctions;
