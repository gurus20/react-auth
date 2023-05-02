import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

export default function Data() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/random-data')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);
    
    const handleClick = (data) => {
        navigate("/datashow", {state: data})
    }

    return (
        <>
            <div className="container">

            <h5>Users:</h5>
            <ul>
                {data.map((data, i) => (
                    <li key={i} onClick={() => handleClick(data)}>{data.name}</li>
                ))}
            </ul>
            </div>
        </>
    )
}