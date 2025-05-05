import React from "react"


export default function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Virtual Study Group</h1>
        <p>Create and join study groups. Share resources. Schedule sessions. Collaborate!</p>
        <button>Get Started</button>
      </section>

      <section className="featured">
        <h2>Featured Groups</h2>
        <div className="group-list">
          <div className="group-card">Math Masters</div>
          <div className="group-card">AI Enthusiasts</div>
          <div className="group-card">Web Wizards</div>
        </div>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Create & Join Groups</li>
          <li>Real-time Chat & Sharing</li>
          <li>Integrated Pomodoro Timer</li>
          <li>Session Scheduling</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <p>“An amazing platform for peer learning!”</p>
        <p>“Helped me stay consistent and productive!”</p>
      </section>
    </div>
  )
}
