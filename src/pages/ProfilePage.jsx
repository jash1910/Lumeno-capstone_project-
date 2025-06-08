import GroupCard from '../components/GroupCard';

export default function ProfilePage() {
    const user = {
        name: 'Jashvitha',
        email: 'ojashvitha2007@gmail.com',
        university: 'NST',
        major: 'Computer Science',
        year: 'Sophomore',
        stats: {
            groups: 3,
            resources: 8,
            hours: 42
        }
    };

    const joinedGroups = [
        {
            id: 1,
            name: 'Computer Science Study Group',
            description: 'For students studying algorithms, data structures, and programming',
            memberCount: 24,
            resourceCount: 15,
            tags: ['CS', 'Programming', 'Algorithms']
        },
        {
            id: 2,
            name: 'Mathematics Enthusiasts',
            description: 'From calculus to linear algebra, we cover it all',
            memberCount: 18,
            resourceCount: 12,
            tags: ['Math', 'Calculus', 'Algebra']
        },
        {
            id: 3,
            name: 'Language Learners',
            description: 'Practice and learn new languages together',
            memberCount: 32,
            resourceCount: 20,
            tags: ['Languages', 'Spanish', 'French']
        }
    ];

    const recentActivity = [
        { id: 1, action: 'Uploaded a resource', group: 'CS Study Group', time: '2 hours ago' },
        { id: 2, action: 'Sent a message', group: 'Math Enthusiasts', time: '1 day ago' },
        { id: 3, action: 'Joined group', group: 'Language Learners', time: '3 days ago' },
        { id: 4, action: 'Completed Pomodoro session', details: '25 minutes', time: '5 days ago' }
    ];

    return (
        <div>
            <div className="profile-header">
                <div className="profile-avatar">
                    {user.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="profile-info">
                    <h2>{user.name}</h2>
                    <p>{user.major} {user.year} at {user.university}</p>
                    <p>{user.email}</p>
                    
                    <div className="profile-stats">
                        <div className="stat-item">
                            <div className="stat-value">{user.stats.groups}</div>
                            <div className="stat-label">Groups</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">{user.stats.resources}</div>
                            <div className="stat-label">Resources</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">{user.stats.hours}</div>
                            <div className="stat-label">Study Hours</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="profile-groups card">
                <h2 className="card-header">Your Study Groups</h2>
                <div className="groups-grid">
                    {joinedGroups.map(group => (
                        <GroupCard key={group.id} group={group} />
                    ))}
                </div>
            </div>
            
            <div className="card mt-4">
                <h2 className="card-header">Recent Activity</h2>
                <div className="activity-list">
                    {recentActivity.map(activity => (
                        <div key={activity.id} className="activity-item flex justify-between py-2 border-b border-gray-200">
                            <div>
                                <span className="font-medium">{activity.action}</span>
                                {activity.group && <span> in {activity.group}</span>}
                                {activity.details && <span>: {activity.details}</span>}
                            </div>
                            <div className="text-sm text-gray-500">{activity.time}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}