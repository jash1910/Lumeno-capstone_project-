import React, { useState, useEffect } from "react"


export default function PomodoroPage() {
  const [time, setTime] = useState(1500)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let timer
    if (running) {
      timer = setInterval(() => setTime(prev => prev - 1), 1000)
    }
    return () => clearInterval(timer)
  }, [running])

  const formatTime = () => {
    const mins = Math.floor(time / 60)
    const secs = time % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="pomodoro">
      <h1>Pomodoro Timer</h1>
      <div className="timer">{formatTime()}</div>
      <button onClick={() => setRunning(!running)}>{running ? "Pause" : "Start"}</button>
    </div>
  )
}
