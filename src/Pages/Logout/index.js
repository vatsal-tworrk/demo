import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/context";

const Logout = () => {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setUser(null);
            sessionStorage.removeItem("user");
            navigate("/login");
        }
    }, []);

};

export default Logout;