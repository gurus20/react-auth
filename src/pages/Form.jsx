import React, { useState } from "react"
import $ from "jquery"
import Cookies from 'js-cookie';


export default function Form() {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState(null);
    const csrf_token = Cookies.get('csrftoken');

    const handleSubmit = (e) => {
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: "http://localhost:8000/v1/api/data",
            headers: {
                'X-CSRFToken': csrf_token
            },
            data: inputs,
            success: function (data) {
                console.log(data);
            },
            error: function (xhr, textStatus, errorThrown) {
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
        })

    }

    const handleChange = (e) => {
        setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="col-5 m-auto mt-5">
                {
                    errors &&
                    <div className="alert alert-danger">
                        <p className="mb-0">{errors}</p>
                    </div>
                }
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    placeholder={"Username"}
                    id="username"
                    className="form-control mb-3"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={inputs.password || ""}
                    placeholder={"Password"}
                    id="password"
                    className="form-control mb-3"
                    onChange={handleChange}
                />
                <input type="submit" value={"Submit"} className="btn btn-success" />
            </form>
        </>
    )

}