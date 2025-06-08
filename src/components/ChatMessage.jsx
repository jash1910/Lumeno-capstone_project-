export default function ChatMessage({ message, isCurrentUser }) {
    return (
        <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-2`}>
            <div 
                className={`max-w-xs p-3 rounded-lg ${isCurrentUser ? 'bg-primary-color text-white' : 'bg-gray-200'}`}
                style={{ borderRadius: isCurrentUser ? '18px 18px 0 18px' : '18px 18px 18px 0' }}
            >
                <div className="text-sm font-medium mb-1">
                    {!isCurrentUser && message.sender}
                </div>
                <div>{message.text}</div>
                <div className="text-xs mt-1 text-right">
                    {message.time}
                </div>
            </div>
        </div>
    );
}