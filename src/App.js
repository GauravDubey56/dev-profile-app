import React from "react";
import { Header } from "./components";
import { Home, GitHubCards, Welcome, Profile, SetupProfile } from './screens'
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom'
function App() {
  const AppGuestRoutes = () => {
    const routes = useRoutes([
      { path: "/", element: <Home /> },
      // {path : "/profile/:username"}
      //about 
    ])
    return routes;
  }
  const LoggedInRoutes = () => {
    const routes = useRoutes([

      { path: "/profile/github", element: <GitHubCards />, exact: true },
      { path: "/", element: <Welcome /> },
      { path: "/edit/profile", element: <SetupProfile /> }
    ])
    return routes
  }
  return (
    <div>
      <Router>
        <Header />
        {!localStorage.getItem("isLoggedIn") && <AppGuestRoutes />}
        {localStorage.getItem("isLoggedIn") && <LoggedInRoutes />}
        <Routes>
          <Route path="/auth/success" element={<Welcome />} />
          <Route exact path="/profile/:username" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
