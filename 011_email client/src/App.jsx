import { useState } from 'react'
import Sidebar from './components/Sidebar'
import EmailList from './components/EmailList'
import EmailView from './components/EmailView'
import './App.css'

function App() {
  const [selectedEmail, setSelectedEmail] = useState(null)
  const [currentFolder, setCurrentFolder] = useState('inbox')

  const folders = [
    { id: 'inbox', name: 'Inbox', count: 3, icon: '📥' },
    { id: 'starred', name: 'Starred', count: 1, icon: '⭐' },
    { id: 'snoozed', name: 'Snoozed', count: 0, icon: '⏰' },
    { id: 'sent', name: 'Sent', count: 12, icon: '📤' },
    { id: 'drafts', name: 'Drafts', count: 2, icon: '📝' },
  ]

  const initialEmails = [
    {
      id: 1,
      sender: 'Google Team',
      subject: 'Security alert for your Google Account',
      preview: 'There was a new sign-in to your Google Account on a Windows device...',
      time: '10:42 AM',
      date: 'Today',
      unread: true,
      starred: false,
      important: true,
      folder: 'inbox'
    },
    {
      id: 2,
      sender: 'GitHub',
      subject: 'Security update for your repository',
      preview: 'We noticed unusual activity in your repository...',
      time: '9:15 AM',
      date: 'Today',
      unread: true,
      starred: true,
      important: false,
      folder: 'inbox'
    },
    {
      id: 3,
      sender: 'John Doe',
      subject: 'Project Update Meeting',
      preview: 'Hi, just wanted to follow up on our project timeline...',
      time: 'Yesterday',
      date: 'Dec 12',
      unread: false,
      starred: false,
      important: false,
      folder: 'inbox'
    },
    {
      id: 4,
      sender: 'Amazon Web Services',
      subject: 'AWS Billing Notification',
      preview: 'Your AWS bill for November is now available...',
      time: 'Dec 10',
      date: 'Dec 10',
      unread: false,
      starred: false,
      important: true,
      folder: 'inbox'
    },
    {
      id: 5,
      sender: 'Sarah Johnson',
      subject: 'Lunch this Friday?',
      preview: 'Hey, are you available for lunch this Friday at...',
      time: 'Dec 9',
      date: 'Dec 9',
      unread: false,
      starred: false,
      important: false,
      folder: 'inbox'
    },
  ]

  const [emails, setEmails] = useState(initialEmails)

  const handleEmailClick = (email) => {
    setSelectedEmail(email)
    // Mark as read when opened
    setEmails(emails.map(e => 
      e.id === email.id ? { ...e, unread: false } : e
    ))
  }

  const toggleStar = (emailId) => {
    setEmails(emails.map(email =>
      email.id === emailId ? { ...email, starred: !email.starred } : email
    ))
  }

  const filteredEmails = emails.filter(email => email.folder === currentFolder)

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <button className="menu-btn">☰</button>
          <div className="logo">
            <span className="logo-red">G</span>
            <span className="logo-blue">m</span>
            <span className="logo-yellow">a</span>
            <span className="logo-blue">i</span>
            <span className="logo-green">l</span>
          </div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search mail" />
          <button className="search-btn">🔍</button>
        </div>
        <div className="header-right">
          <button className="icon-btn">🔄</button>
          <button className="icon-btn">⚙️</button>
          <button className="icon-btn">👤</button>
        </div>
      </header>

      <div className="main-content">
        <Sidebar 
          folders={folders}
          currentFolder={currentFolder}
          setCurrentFolder={setCurrentFolder}
        />
        
        <EmailList 
          emails={filteredEmails}
          onEmailClick={handleEmailClick}
          selectedEmail={selectedEmail}
          toggleStar={toggleStar}
        />
        
        <EmailView 
          email={selectedEmail}
          onBack={() => setSelectedEmail(null)}
        />
      </div>
    </div>
  )
}

export default App