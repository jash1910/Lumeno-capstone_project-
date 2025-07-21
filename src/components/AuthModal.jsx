import { useState } from 'react';
import { auth } from './firebase'; // Make sure firebase.js is set up
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile
} from 'firebase/auth';

export default function AuthModal({ onClose, onLogin }) {
    const [activeTab, setActiveTab] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            if (activeTab === 'login') {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                console.log('Logged in:', userCredential.user);
            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                await updateProfile(userCredential.user, { displayName: name });
                console.log('Signed up:', userCredential.user);
            }

            onLogin(); // Notify parent component
            onClose(); // Optionally close modal
        } catch (err) {
            console.error('Auth error:', err.message);
            setError(err.message); // Display error below form
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>×</button>

                <div className="modal-header">
                    <h2>{activeTab === 'login' ? 'Login' : 'Sign Up'}</h2>
                </div>

                <div className="auth-tabs">
                    <div
                        className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
                        onClick={() => setActiveTab('login')}
                    >
                        Login
                    </div>
                    <div
                        className={`auth-tab ${activeTab === 'signup' ? 'active' : ''}`}
                        onClick={() => setActiveTab('signup')}
                    >
                        Sign Up
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    {activeTab === 'signup' && (
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="btn btn-primary w-100 mt-2">
                        {activeTab === 'login' ? 'Login' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    );
}
