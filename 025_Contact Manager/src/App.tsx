import React, { useState, useEffect } from 'react';
import { Contact, ContactFormData } from './types/types';
import { initialContacts } from './data/initialContacts';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import SearchBar from './components/SearchBar';

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddContact = (contactData: ContactFormData) => {
    const newContact: Contact = {
      ...contactData,
      id: Date.now().toString(),
      avatarColor: `bg-gradient-to-r from-${['blue', 'green', 'purple', 'pink', 'orange'][Math.floor(Math.random() * 5)]}-500 to-${['blue', 'green', 'purple', 'pink', 'orange'][Math.floor(Math.random() * 5)]}-600`,
    };
    setContacts(prev => [...prev, newContact]);
    setShowForm(false);
  };

  const handleEditContact = (contactData: ContactFormData) => {
    if (editingContact) {
      setContacts(prev => prev.map(contact =>
        contact.id === editingContact.id
          ? { ...contact, ...contactData }
          : contact
      ));
      setEditingContact(null);
    }
  };

  const handleDeleteContact = (id: string) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      setContacts(prev => prev.filter(contact => contact.id !== id));
    }
  };

  const handleEditClick = (contact: Contact) => {
    setEditingContact(contact);
  };

  const totalContacts = contacts.length;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your contacts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Contact Manager
              </h1>
              <p className="text-gray-600 mt-1">Manage your contacts efficiently</p>
            </div>
            <div className="flex items-center space-x-4">
              <SearchBar 
                searchTerm={searchTerm} 
                onSearchChange={setSearchTerm} 
              />
              <button
                onClick={() => setShowForm(true)}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Contact
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Your Contacts</h2>
            <p className="text-gray-600">
              {filteredContacts.length} of {totalContacts} contacts
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Click on a contact to view details</span>
          </div>
        </div>

        <ContactList
          contacts={filteredContacts}
          onEdit={handleEditClick}
          onDelete={handleDeleteContact}
        />

        {/* Stats Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Contacts</p>
                  <p className="text-3xl font-bold text-gray-800">{totalContacts}</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-xl">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Showing</p>
                  <p className="text-3xl font-bold text-gray-800">{filteredContacts.length}</p>
                </div>
                <div className="p-3 bg-green-50 rounded-xl">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Storage Used</p>
                  <p className="text-3xl font-bold text-gray-800">{Math.round((totalContacts * 0.5) * 100) / 100} KB</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-xl">
                  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Contact Form Modal */}
      {showForm && (
        <ContactForm
          onSubmit={handleAddContact}
          onCancel={() => setShowForm(false)}
        />
      )}

      {editingContact && (
        <ContactForm
          onSubmit={handleEditContact}
          onCancel={() => setEditingContact(null)}
          initialData={editingContact}
          isEditing={true}
        />
      )}

      {/* Footer */}
      <footer className="mt-12 py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>Contact Manager v1.0 • Built with React, TypeScript, and Tailwind CSS</p>
          <p className="text-sm mt-2">Click on any contact card to edit or delete</p>
        </div>
      </footer>
    </div>
  );
};

export default App;