import { useState, useEffect } from 'react';
import ResourceCard from '../components/ResourceCard';
import ChatMessage from '../components/ChatMessage';

export default function GroupPage({ group }) {
    const [message, setMessage] = useState('');

    const [messages, setMessages] = useState(() => {
        const storedMessages = localStorage.getItem('groupMessages');
        return storedMessages ? JSON.parse(storedMessages) : [
            {
                id: 1,
                sender: 'Alex Johnson',
                text: 'Hey everyone! Welcome to our study group. Feel free to introduce yourselves.',
                time: '10:30 AM',
                isCurrentUser: false
            },
            {
                id: 2,
                sender: 'You',
                text: 'Hi Alex! Excited to be part of this group. Looking forward to learning together.',
                time: '10:35 AM',
                isCurrentUser: true
            },
            {
                id: 3,
                sender: 'Maria Garcia',
                text: 'Hello! I\'m Maria. Does anyone have good resources for the upcoming exam?',
                time: '10:40 AM',
                isCurrentUser: false
            }
        ];
    });

    useEffect(() => {
        localStorage.setItem('groupMessages', JSON.stringify(messages));
    }, [messages]);

    const resources = [
        {
            id: 1,
            title: 'Algorithms Textbook PDF',
            description: 'Complete textbook covering all major algorithms with examples',
            type: 'document',
            uploadedBy: 'Alex Johnson',
            date: '2 days ago'
        },
        {
            id: 2,
            title: 'Practice Problems Website',
            description: 'Collection of coding problems with solutions',
            type: 'link',
            uploadedBy: 'Sam Wilson',
            date: '1 week ago'
        },
        {
            id: 3,
            title: 'Lecture Notes - Week 1',
            description: 'My notes from the first week of classes',
            type: 'document',
            uploadedBy: 'You',
            date: '3 days ago'
        }
    ];

    const members = [
        { id: 1, name: 'Alex Johnson', role: 'Admin' },
        { id: 2, name: 'You', role: 'Member' },
        { id: 3, name: 'Maria Garcia', role: 'Member' },
        { id: 4, name: 'Sam Wilson', role: 'Member' },
        { id: 5, name: 'Taylor Smith', role: 'Member' }
    ];

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            const newMessage = {
                id: messages.length + 1,
                sender: 'You',
                text: message,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                isCurrentUser: true
            };
            setMessages([...messages, newMessage]);
            setMessage('');
        }
    };

    return (
        <div>
            <div className="group-header">
                <h1 className="group-title">{group?.name || 'Study Group'}</h1>
                <button className="btn btn-primary">Invite Members</button>
            </div>

            <div className="group-content">
                <div>
                    <div className="group-resources">
                        <h2 className="card-header">Shared Resources</h2>
                        <div className="resource-list">
                            {resources.map(resource => (
                                <ResourceCard key={resource.id} resource={resource} />
                            ))}
                        </div>
                        <button className="btn btn-outline">Upload Resource</button>
                    </div>

                    <div className="group-chat card">
                        <h2 className="card-header">Group Chat</h2>
                        <div className="chat-messages">
                            {messages.map(msg => (
                                <ChatMessage
                                    key={msg.id}
                                    message={msg}
                                    isCurrentUser={msg.isCurrentUser}
                                />
                            ))}
                        </div>
                        <form className="chat-input" onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                placeholder="Type your message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>

                <div className="group-sidebar">
                    <div>
                        <h3>Group Info</h3>
                        <p>{group?.description || 'Group description goes here'}</p>
                    </div>

                    <div className="group-members">
                        <h3>Members ({members.length})</h3>
                        <div className="member-list">
                            {members.map(member => (
                                <div key={member.id} className="member-item">
                                    <div className="member-avatar"></div>
                                    <div>
                                        <div>{member.name}</div>
                                        <div className="text-sm">{member.role}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="group-calendar">
                        <div className="calendar-header">
                            <h3>Upcoming Sessions</h3>
                            <button className="btn btn-outline btn-sm">Add</button>
                        </div>

                        <div className="calendar-grid">
                            <div className="calendar-day header">Sun</div>
                            <div className="calendar-day header">Mon</div>
                            <div className="calendar-day header">Tue</div>
                            <div className="calendar-day header">Wed</div>
                            <div className="calendar-day header">Thu</div>
                            <div className="calendar-day header">Fri</div>
                            <div className="calendar-day header">Sat</div>

                            {Array.from({ length: 31 }).map((_, i) => {
                                const day = i + 1;
                                let className = 'calendar-day';
                                if (day === 15) className += ' today';
                                if (day === 8 || day === 22) className += ' event';
                                return (
                                    <div key={day} className={className}>
                                        {day}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
