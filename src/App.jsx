import React, { useState } from "react"
import HomePage from "./pages/HomePage"
import Dashboard from "./pages/Dashboard"
import GroupPage from "./pages/GroupPage"
import PomodoroPage from "./pages/PomodoraPage"
import ProfilePage from "./pages/ProfilePage"
import AboutPage from "./pages/AboutPage"
import Navbar from "./components/navbar"
import Footer from "./components/Footer"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard": return <Dashboard />
      case "group": return <GroupPage />
      case "pomodoro": return <PomodoroPage />
      case "profile": return <ProfilePage />
      case "about": return <AboutPage />
      default: return <HomePage />
    }
  }

  return (
    <div className="app-container">
      <Navbar navigate={setCurrentPage} />
      <div className="content">{renderPage()}</div>
      <Footer />
    </div>
  )
}

