import "./App.css";
import { useState } from "react";
import axios from "axios";
import Cookie from "js-cookie";

function App() {
    const [userData, setUserData] = useState({});

    const url = "http://localhost:4000/auth" 

    const handleProtected = async e => {
        const headers = {
            authorization: `Bearer ${Cookie.get("jwt")}`
        };
        const response = await axios.get(
            `${url}/protected`,
            { headers }
        );
        console.log(response.data);
    };

    const handleChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleLogin = async e => {
        e.preventDefault();

        const response = await axios.post(`${url}/login`, {
            data: userData
        });
        if (response.data.token) Cookie.set("jwt", response.data.token);
    };

    const handleSignup = async e => {
        e.preventDefault();

        const response = await axios.post(`${url}/signup`, {
            data: userData
        });
    };

    return (
        <div className="App">
            <form action="" onChange={handleChange}>
                <input type="text" placeholder="username" name="username" />
                <br />
                <input type="password" placeholder="password" name="password" />
                <br />
                <button type="submit" onClick={handleSignup}>
                    sign up
                </button>
                <button type="submit" onClick={handleLogin}>
                    login
                </button>
            </form>

            <button onClick={handleProtected}>Protected API</button>
        </div>
    );
}
export default App;
