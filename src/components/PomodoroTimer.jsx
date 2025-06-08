import { useState, useEffect } from 'react';

export default function PomodoroTimer() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState('work');
    const [workDuration, setWorkDuration] = useState(25);
    const [breakDuration, setBreakDuration] = useState(5);

    useEffect(() => {
        let interval = null;
        
        if (isActive) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        // Timer completed
                        clearInterval(interval);
                        const nextMode = mode === 'work' ? 'break' : 'work';
                        setMode(nextMode);
                        setMinutes(nextMode === 'work' ? workDuration : breakDuration);
                        setSeconds(0);
                        setIsActive(false);
                        // Play sound
                        new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3').play();
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        } else if (!isActive && interval) {
            clearInterval(interval);
        }
        
        return () => clearInterval(interval);
    }, [isActive, minutes, seconds, mode, workDuration, breakDuration]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        setMinutes(mode === 'work' ? workDuration : breakDuration);
        setSeconds(0);
    };

    const formatTime = () => {
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="card">
            <div className="text-center">
                <h3 className="mb-2">{mode === 'work' ? 'Work Time' : 'Break Time'}</h3>
                <div className="pomodoro-display">
                    {formatTime()}
                </div>
                <div className="pomodoro-controls">
                    <button className="btn btn-primary" onClick={toggleTimer}>
                        {isActive ? 'Pause' : 'Start'}
                    </button>
                    <button className="btn btn-outline" onClick={resetTimer}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}