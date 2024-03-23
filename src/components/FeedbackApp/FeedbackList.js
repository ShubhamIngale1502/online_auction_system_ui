import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../components/table.css';


//{backgroundColor: `rgba(${145}, ${53}, ${19}, ${0.978})`}

const FeedbackList = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwNzYxNDgwLCJpYXQiOjE3MTA3NjExODAsImp0aSI6ImFhOTA5M2IxMGRmZjQ1YzI5YTc5Mzc5MzQ5N2Q0Y2I4IiwidXNlcl9pZCI6Mn0.7Js1GC3EIchSpLkknePM3D_vhIgKFCxCEUPDBpwozHY";

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get('http://localhost:8000/fb/feedback/list/', {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                setFeedbacks(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchFeedbacks();
    }, []);

    return (
        <div className='container'>
            <h2>Feedback List</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className='table1'>
                    <thead className="thead1">
                        <tr>
                            <th>Email</th>
                            <th>Response</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody className='tbody1'>
                        {feedbacks.map((feedback) => (
                            <tr key={feedback.id} >
                                <td>{feedback.email}</td>
                                <td>{feedback.response}</td>
                                <td>{new Date(feedback.feedback_date).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default FeedbackList;
