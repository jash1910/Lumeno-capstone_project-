import React from "react"


export default function GroupPage() {
  return (
    <div className="group-page">
      <h1>Group Name: Web Wizards</h1>
      <section className="resources">
        <h2>Shared Resources</h2>
        <ul>
          <li><a href="#">React Cheatsheet</a></li>
          <li><a href="#">Zoom Link</a></li>
        </ul>
      </section>
      <section className="chat">
        <h2>Group Chat</h2>
        <div className="chat-box">
          <p><strong>Alice:</strong> Let’s meet at 5!</p>
          <p><strong>Bob:</strong> Cool, see you!</p>
        </div>
        <input type="text" placeholder="Type a message..." />
      </section>
      <section className="calendar">
        <h2>Group Calendar</h2>
        <p>📅 Google Calendar Integration (Coming soon)</p>
      </section>
    </div>
  )
}
