import GroupCard from '../components/GroupCard';

export default function HomePage({ navigateTo }) {
    const featuredGroups = [
        {
            id: 1,
            name: 'Computer Science Study Group',
            description: 'For students studying algorithms, data structures, and programming',
            memberCount: 24,
            resourceCount: 15,
            tags: ['Math', 'WAP', 'DSA']
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
        }
    ];

    return (
        <div>
            <section className="hero">
                <h1>Study Smarter, Together</h1>
                <p>Join virtual study groups, share resources, and boost your productivity with our collaborative platform.</p>
                <button 
                    className="btn btn-accent"
                    onClick={() => navigateTo('dashboard')}
                >
                    Explore Groups
                </button>
            </section>
            
            <section className="features">
                <div className="feature-card">
                    <div className="feature-icon">👥</div>
                    <h3>Collaborative Groups</h3>
                    <p>Form or join study groups with students who share your academic interests.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">📚</div>
                    <h3>Shared Resources</h3>
                    <p>Upload and access study materials, notes, and helpful links in one place.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">⏱️</div>
                    <h3>Pomodoro Timer</h3>
                    <p>Stay focused with our built-in productivity timer and track your study sessions.</p>
                </div>
            </section>
            
            <section className="testimonials">
                <h2 className="text-center">What Our Users Say</h2>
                <div className="testimonial-grid">
                    <div className="testimonial-card">
                        <p className="testimonial-text">"This platform helped me connect with other medical students across the country. The shared resources have been invaluable for my exams."</p>
                        <p className="testimonial-author">- Suhana., Medical Student</p>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-text">"The Pomodoro timer keeps me accountable and the study groups make learning computer science concepts much easier."</p>
                        <p className="testimonial-author">- Mark T., CS Major</p>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-text">"I've found amazing study partners through this platform. Collaborating virtually has never been this seamless."</p>
                        <p className="testimonial-author">- Emily R., Law Student</p>
                    </div>
                </div>
            </section>
            
            <section>
                <h2 className="text-center mb-3">Featured Study Groups</h2>
                <div className="groups-grid">
                    {featuredGroups.map(group => (
                        <GroupCard 
                            key={group.id} 
                            group={group} 
                            onClick={() => navigateTo('group')}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}