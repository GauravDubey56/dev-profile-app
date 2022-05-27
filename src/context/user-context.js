import React, { createContext, useState } from "react";

const UserContext = createContext({
    userId: "",
    username: "",
    accessToken: "",
    refreshToken: "",
    setUserId: (id) => { } ,
    setAcccesstoken: (token) => { },
    setRefreshtoken: (token) => { },
    logout: () => { },
    setUsername: (username) => { },
    isLoggedIn: () => false,
});


export function UserContextProvider(props) {
    const data = { ...localStorage }
    const [username, setUsername] = useState(data ? data.username : "");
    const [userId, setUserId] = useState(data ? data.userId : "");
    const [accessToken, setAccesstoken] = useState(data ? data.accessToken : "");
    const [refreshToken, setRefreshtoken] = useState(data ? data.refreshToken : "");

    function logoutHandler() {
        localStorage.clear();
        setUsername("");
        setAccesstoken("");
        setRefreshtoken("");
        setUserId("");
    }

    function isLoggedIn() {
        return username !== "";
    }

    const context = {
        username: username,userId,
        accessToken, refreshToken,
        setRefreshtoken, setAccesstoken,
        setUserId,
        setUsername: setUsername,
        logout: logoutHandler,
        isLoggedIn: isLoggedIn
    };

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContext;