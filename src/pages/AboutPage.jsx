export default function AboutPage() {
  const teamMembers = [
      { id: 1, name: 'Jashvitha', role: 'Founder & CEO', bio: 'Passionate about education technology and collaborative learning.' },
      { id: 2, name: 'Jashvitha', role: 'Lead Developer', bio: 'Full-stack developer with a focus on creating intuitive user experiences.' },
      { id: 3, name: 'Jashvitha', role: 'UX Designer', bio: 'Designs interfaces that make learning enjoyable and efficient.' },
      { id: 4, name: 'Jashvitha', role: 'Community Manager', bio: 'Connects students and fosters productive study communities.' }
  ];

  return (
      <div>
          <section className="about-section">
              <h2>Our Mission</h2>
              <p>
                  Virtual Study Group was founded with the mission to make online learning more engaging, 
                  collaborative, and effective. We believe that students learn best when they can connect 
                  with peers, share resources, and hold each other accountable.
              </p>
              <p className="mt-2">
                  In an era where more education is moving online, we saw a need for tools that replicate 
                  the benefits of in-person study groups - the camaraderie, the shared motivation, and 
                  the exchange of ideas.
              </p>
          </section>
          
          <section className="about-section">
              <h2>Our Team</h2>
              <p>
                  We're a diverse team of educators, developers, and designers united by our passion 
                  for improving the online learning experience.
              </p>
              
              <div className="team-grid">
                  {teamMembers.map(member => (
                      <div key={member.id} className="team-card">
                          <div className="team-avatar">
                              {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <h3>{member.name}</h3>
                          <p className="text-sm text-primary-color">{member.role}</p>
                          <p className="mt-2 text-sm">{member.bio}</p>
                      </div>
                  ))}
              </div>
          </section>
          
          <section className="about-section">
              <h2>Contact Us</h2>
              <p>
                  Have questions or feedback? We'd love to hear from you!
              </p>
              
              <div className="contact-info mt-3">
                  <div className="contact-item">
                      <span className="contact-icon">📧</span>
                      <span>ojashvitha2007@gmail.com</span>
                  </div>
                  <div className="contact-item">
                      <span className="contact-icon">📱</span>
                      <span>9059997287</span>
                  </div>
                  <div className="contact-item">
                      <span className="contact-icon">🏢</span>
                      <span>newton school of technology</span>
                  </div>
              </div>
          </section>
      </div>
  );
}