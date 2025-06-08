export default function GroupCard({ group, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <h3>{group.name}</h3>
            <p className="mt-1">{group.description}</p>
            <div className="flex justify-between mt-2">
                <span>👥 {group.memberCount} members</span>
                <span>📚 {group.resourceCount} resources</span>
            </div>
            <div className="mt-2">
                {group.tags.map(tag => (
                    <span key={tag} className="filter-btn" style={{ marginRight: '0.5rem' }}>{tag}</span>
                ))}
            </div>
        </div>
    );
}