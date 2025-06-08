import PomodoroTimer from '../components/PomodoroTimer';

export default function PomodoroPage() {
    return (
        <div className="pomodoro-container">
            <h1 className="text-center">Pomodoro Timer</h1>
            <p className="text-center mb-4">
                Boost your productivity with the Pomodoro technique. Work for 25 minutes, then take a 5-minute break.
            </p>
            
            <PomodoroTimer />
            
            <div className="pomodoro-settings card mt-4">
                <h3 className="card-header">Timer Settings</h3>
                
                <div className="setting-row">
                    <span className="setting-label">Work Duration</span>
                    <div className="setting-value">
                        <button className="setting-btn">-</button>
                        <span>25 minutes</span>
                        <button className="setting-btn">+</button>
                    </div>
                </div>
                
                <div className="setting-row">
                    <span className="setting-label">Break Duration</span>
                    <div className="setting-value">
                        <button className="setting-btn">-</button>
                        <span>5 minutes</span>
                        <button className="setting-btn">+</button>
                    </div>
                </div>
                
                <div className="setting-row">
                    <span className="setting-label">Long Break Duration</span>
                    <div className="setting-value">
                        <button className="setting-btn">-</button>
                        <span>15 minutes</span>
                        <button className="setting-btn">+</button>
                    </div>
                </div>
                
                <div className="setting-row">
                    <span className="setting-label">Auto-start breaks</span>
                    <input type="checkbox" />
                </div>
                
                <div className="setting-row">
                    <span className="setting-label">Auto-start work</span>
                    <input type="checkbox" />
                </div>
            </div>
        </div>
    );
}