import { useEffect, useState } from "react"

export default function Data() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:5000/random-data')
            .then(response => response.json())
            .then(data => setData(data));
    },[]);

    return (
        <>
            <div className="container">

            <h5>Users:</h5>
            <ul>
                {data.map((user, i) => (
                    <li key={i}>{user.name}</li>
                ))}
            </ul>
            </div>
        </>
    )
}