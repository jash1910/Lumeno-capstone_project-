export default function ResourceCard({ resource }) {
    return (
        <div className="card">
            <div className="flex justify-between items-center">
                <h4>{resource.title}</h4>
                <span className="text-sm">{resource.type === 'document' ? '📄' : '🔗'}</span>
            </div>
            <p className="text-sm mt-1">{resource.description}</p>
            <div className="flex justify-between mt-2 text-sm">
                <span>Uploaded by: {resource.uploadedBy}</span>
                <span>{resource.date}</span>
            </div>
        </div>
    );
}