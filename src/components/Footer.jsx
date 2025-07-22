export default function Footer({ navigateTo }) {
  return (
      <footer className="footer">
          <div className="footer-content">
              <div className="footer-links">
                  <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>Home</a>
                  <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); navigateTo('dashboard'); }}>Groups</a>
                  <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); navigateTo('pomodoro'); }}>Pomodoro</a>
                  <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); navigateTo('about'); }}>About</a>
              </div>
              
              
              
              <p className="footer-copyright">© 2025 Virtual Study Group. All rights reserved.</p>
          </div>
      </footer>
  );
}