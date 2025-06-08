import { useState } from 'react';
import GroupCard from '../components/GroupCard';

export default function DashboardPage({ navigateTo, setActiveGroup }) {
    const [activeFilter, setActiveFilter] = useState('all');
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [newGroupName, setNewGroupName] = useState('');
    const [newGroupDesc, setNewGroupDesc] = useState('');
    
    const studyGroups = [
        {
            id: 1,
            name: 'Computer Science Study Group',
            description: 'For students studying algorithms, data structures, and programming',
            memberCount: 24,
            resourceCount: 15,
            tags: ['CS', 'WAP', 'DSA']
        },
        {
            id: 2,
            name: 'Medical Students United',
            description: 'Collaborative group for medical students preparing for exams',
            memberCount: 42,
            resourceCount: 28,
            tags: ['Medicine', 'Biology', 'Anatomy']
        },
        {
            id: 3,
            name: 'Mathematics Enthusiasts',
            description: 'From calculus to linear algebra, we cover it all',
            memberCount: 18,
            resourceCount: 12,
            tags: ['Math', 'Calculus', 'Algebra']
        },
        {
            id: 4,
            name: 'History Buffs',
            description: 'Discussing world history from ancient to modern times',
            memberCount: 15,
            resourceCount: 8,
            tags: ['History', 'Humanities']
        },
        {
            id: 5,
            name: 'Language Learners',
            description: 'Practice and learn new languages together',
            memberCount: 32,
            resourceCount: 20,
            tags: ['English', 'Spanish', 'French']
        },
        {
            id: 6,
            name: 'Physics Study Circle',
            description: 'For students tackling classical and quantum physics',
            memberCount: 12,
            resourceCount: 10,
            tags: ['Physics', 'Science']
        }
    ];

    const filteredGroups = activeFilter === 'all' 
        ? studyGroups 
        : studyGroups.filter(group => group.tags.includes(activeFilter));

    const handleCreateGroup = (e) => {
        e.preventDefault();
        // In a real app, you would send this to the backend
        const newGroup = {
            id: studyGroups.length + 1,
            name: newGroupName,
            description: newGroupDesc,
            memberCount: 1,
            resourceCount: 0,
            tags: []
        };
        studyGroups.unshift(newGroup);
        setNewGroupName('');
        setNewGroupDesc('');
        setShowCreateModal(false);
    };

    return (
        <div>
            <div className="dashboard-header">
                <h1>Study Groups</h1>
                <button 
                    className="btn btn-primary"
                    onClick={() => setShowCreateModal(true)}
                >
                    Create Group
                </button>
            </div>
            
            <div className="group-filters">
                <button 
                    className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('all')}
                >
                    All Groups
                </button>
                <button 
                    className={`filter-btn ${activeFilter === 'CS' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('CS')}
                >
                    Computer Science
                </button>
                <button 
                    className={`filter-btn ${activeFilter === 'Medicine' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('Medicine')}
                >
                    Medicine
                </button>
                <button 
                    className={`filter-btn ${activeFilter === 'Math' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('Math')}
                >
                    Mathematics
                </button>
                <button 
                    className={`filter-btn ${activeFilter === 'Languages' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('Languages')}
                >
                    Languages
                </button>
            </div>
            
            <div className="groups-grid">
                {filteredGroups.map(group => (
                    <GroupCard 
                        key={group.id} 
                        group={group} 
                        onClick={() => {
                            setActiveGroup(group);
                            navigateTo('group');
                        }}
                    />
                ))}
            </div>
            
            {showCreateModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button 
                            className="modal-close" 
                            onClick={() => setShowCreateModal(false)}
                        >
                            ×
                        </button>
                        
                        <div className="modal-header">
                            <h2>Create New Study Group</h2>
                        </div>
                        
                        <form onSubmit={handleCreateGroup}>
                            <div className="form-group">
                                <label htmlFor="group-name">Group Name</label>
                                <input
                                    type="text"
                                    id="group-name"
                                    className="form-control"
                                    value={newGroupName}
                                    onChange={(e) => setNewGroupName(e.target.value)}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="group-desc">Description</label>
                                <textarea
                                    id="group-desc"
                                    className="form-control"
                                    rows="3"
                                    value={newGroupDesc}
                                    onChange={(e) => setNewGroupDesc(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="btn btn-primary w-100 mt-2">
                                Create Group
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}