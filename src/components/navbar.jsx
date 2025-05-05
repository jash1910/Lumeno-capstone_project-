import React from "react"


export default function Navbar({ navigate }) {
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("home")}>StudyGroup</div>
      <ul className="nav-links">
        <li onClick={() => navigate("dashboard")}>Dashboard</li>
        <li onClick={() => navigate("group")}>Groups</li>
        <li onClick={() => navigate("pomodoro")}>Pomodoro</li>
        <li onClick={() => navigate("profile")}>Profile</li>
        <li onClick={() => navigate("about")}>About</li>
      </ul>
    </nav>
  )
}
