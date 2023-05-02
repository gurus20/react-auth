import { useLocation } from "react-router-dom"

export default function Data() {
    const data = useLocation().state;
    return (
        <>
            <div className="container">
                <p>{ data.name }</p>
                <p>{data.email}</p>
                <p>{data.address}</p>
                <p>{data.phone}</p>
                <p>{data.job}</p>
            </div>
        </>
    )
}