import React from "react"


export default function ProfilePage() {
  return (
    <div className="profile">
      <h1>User Profile</h1>
      <section className="info">
        <p><strong>Name:</strong> Jash</p>
        <p><strong>Email:</strong> jash@example.com</p>
      </section>
      <section className="groups">
        <h2>Joined Groups</h2>
        <ul>
          <li>Frontend Ninjas</li>
          <li>AI Explorers</li>
        </ul>
      </section>
    </div>
  )
}
