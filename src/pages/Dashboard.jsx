import React from "react"


export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Study Groups Dashboard</h1>
      <div className="dashboard-controls">
        <button>Create Group</button>
        <input type="text" placeholder="Filter groups..." />
      </div>
      <div className="group-list">
        <div className="group-card">React Learners</div>
        <div className="group-card">Data Science Squad</div>
      </div>
    </div>
  )
}
