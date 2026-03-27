import React from 'react';

function Footer() {
  return (
    <footer className="bg-netflix-black text-gray-400 py-8 md:py-12 mt-8 md:mt-12">
      <div className="netflix-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-xs md:text-sm">
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Audio and Subtitles</a></li>
              <li><a href="#" className="hover:underline">Media Center</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Audio Description</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:underline">Legal Notices</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Gift Cards</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Corporate Information</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs">
          <p>&copy; 2025 Netflix Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;