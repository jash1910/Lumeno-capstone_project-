export default function Navbar({ navigateTo, isLoggedIn, onLoginClick, onLogoutClick }) {
  return (
      <nav className="navbar">
          <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>
              Virtual<span>Study</span>
          </a>
          
          <div className="nav-links">
              <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>Home</a>
              <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); navigateTo('dashboard'); }}>Groups</a>
              <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); navigateTo('pomodoro'); }}>Pomodoro</a>
              <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); navigateTo('about'); }}>About</a>
              {isLoggedIn && (
                  <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); navigateTo('profile'); }}>Profile</a>
              )}
          </div>
          
          <div className="nav-actions">
              {isLoggedIn ? (
                  <button className="btn btn-outline" onClick={onLogoutClick}>Logout</button>
              ) : (
                  <button className="btn btn-accent" onClick={onLoginClick}>Login</button>
              )}
          </div>
      </nav>
  );
}