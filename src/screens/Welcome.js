import React, { useContext, useState, useEffect } from 'react'
import { Container, Box } from '@material-ui/core'
import { UserContext } from '../context';
import { server_url } from "../api/GitHub"
function Welcome() {
  const usrCtx = useContext(UserContext)
  const [data, setData] = useState({ isLoading: false, errorMessage: "" })
  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    // If Github API returns the code parameter
    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      setData({ ...data, isLoading: true });
      const code = newUrl[1];

      fetch(server_url + "/github/callback?code=" + code, {
        method: "GET",
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          usrCtx.setAcccesstoken(data.access_token);
          usrCtx.setUsername(data.login);
          console.log(data);
          localStorage.setItem("username", data.login)
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("github_access", data.access_token);
          window.location.reload(true);
        })
        .catch(error => {
          setData({
            isLoading: false,
            errorMessage: "Sorry! Login failed"
          });
          console.log(error)
        });
    }
  }, [usrCtx, data]);

  return (
    <Container maxWidth="sm">
      <Box component="span" sx={{ p: 2 }}>
        {localStorage.getItem("isLoggedIn") && <h2> hi {localStorage.getItem("username")}</h2>}
        {! localStorage.getItem("isLoggedIn") && <h2> Redirecting</h2>}
      </Box>
    </Container>
  )
}

export default Welcome