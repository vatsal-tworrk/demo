import React, { useState } from "react";

const Login = () => {
    const [form, setForm] = useState({
        Email: "",
        Password: "",
    });

    function SubmitData(e) {
        e.preventDefault();
        setForm({
            Email: "",
            Password: "",
        });
    }

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="login-container">
            <form onSubmit={SubmitData}>
                <h3>Login Page</h3>
                <div>
                    <input
                        name="Email"
                        placeholder="Enter Your Email"
                        type="email"
                        value={form.Email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        name="Password"
                        placeholder="Enter Password"
                        type="password"
                        value={form.Password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
