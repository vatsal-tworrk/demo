import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/context";

const Login = () => {
    const [form, setForm] = useState({
        Email: "",
        Password: "",
    });

    const { user, setUser } = useContext(AuthContext);

    useEffect(() => {
        const store = sessionStorage.getItem("user");
        setUser(JSON.parse(store));
    }, []);

    const SubmitData = (e) => {
        e.preventDefault();
        setUser(form);
        sessionStorage.setItem("user", JSON.stringify(form));
        setForm({
            Email: "",
            Password: "",
        });
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    if (user) {
        return <Navigate to="/" state={{ user }} replace={false} />;
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
};

export default Login;
