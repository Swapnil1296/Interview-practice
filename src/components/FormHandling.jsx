import "./styles.css";
import React, { useState } from "react";

export default function FormHandling() {
    const [formData, setFormData] = useState({ name: "", password: "" });
    const [error, setError] = useState({ name: "", password: "" });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setError((prev) => ({
            ...prev,
            [name]: "",
        }));
    };
    console.log(formData);

    const handleSubmit = (e) => {
        e.preventDefault();
        // e.preventDefault();
        setError({ name: "", password: "" });
        if (formData.name === "") {
            setError((prev) => ({ ...prev, name: "Name should not be empty" }));
        } else if (formData.password === "") {
            setError((prev) => ({
                ...prev,
                password: "Password should not be empty",
            }));
        } else {
            alert(JSON.stringify(formData)); // Display the form data as alert
        }
    };

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />
                {error.name && <p>{error.name}</p>}
                <input
                    type="number"
                    value={formData.password}
                    name="password"
                    onChange={handleChange}
                    placeholder="Enter your password"
                />
                {error.password && <p>{error.password}</p>}
                <button type="submit">submit</button>
            </form>
        </div>
    );
}
