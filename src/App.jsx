import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import GroupPage from './pages/GroupPage';
import PomodoroPage from './pages/PomodoroPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import AuthModal from './components/AuthModal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeGroup, setActiveGroup] = useState(null);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage navigateTo={navigateTo} setActiveGroup={setActiveGroup} />;
      case 'group':
        return <GroupPage group={activeGroup} />;
      case 'pomodoro':
        return <PomodoroPage />;
      case 'profile':
        return <ProfilePage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="app">
      <Navbar 
        navigateTo={navigateTo} 
        isLoggedIn={isLoggedIn} 
        onLoginClick={() => setShowAuthModal(true)} 
        onLogoutClick={handleLogout}
      />
      
      <main className="main-content">
        {renderPage()}
      </main>
      
      <Footer navigateTo={navigateTo} />
      
      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)} 
          onLogin={handleLogin}
        />
      )}
    </div>
  );
}

export default App;