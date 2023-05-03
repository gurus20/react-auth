import { useEffect, useState } from "react"
import $ from "jquery"

export default function Data() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        const url = "http://localhost:5000/random-data"
        $.ajax({
            url: url,
            type: 'GET',
            timeout: 5000,
            success: function (response) {
                setData([...response]);
                setLoading(false);
            },
            error: function (xhr, textStatus, errorThrown) {
                setLoading(false);
                if (textStatus === 'timeout') {
                    setErrors("Request Timed out");
                    console.error('Request timed out');
                } else if (xhr.status === 0) {
                    setErrors("Network Error");
                    console.error('Network error');
                } else if (xhr.status === 404) {
                    setErrors("Resource Not Found");
                    console.error('Resource not found');
                } else if (xhr.status === 500) {
                    setErrors("Server Error");
                    console.error('Server error');
                } else {
                    console.error('Unknown error:', errorThrown);
                }
            }
        });

    }, []);

    return (
        <>
            <div className="container cover-space d-flex justify-content-center align-items-center">
                {
                    loading &&
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
                {
                    errors &&
                    <div className="alert alert-danger">
                        <p className="mb-0">{errors}</p>
                    </div>
                }
                <ul>
                    {data.map((item, i) => (
                        <li key={i}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}