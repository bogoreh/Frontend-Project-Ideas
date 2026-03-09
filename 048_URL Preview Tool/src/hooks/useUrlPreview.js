import { useState } from 'react';
import { validateUrl } from '../utils/validators';

export const useUrlPreview = () => {
  const [previewData, setPreviewData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPreview = async (url) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock preview data
      const mockData = {
        title: getMockTitle(url),
        description: getMockDescription(url),
        image: getMockImage(url),
        url: url,
        domain: new URL(url).hostname
      };
      
      setPreviewData(mockData);
    } catch (err) {
      setError('Failed to fetch preview. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Mock data generators
  const getMockTitle = (url) => {
    const domains = {
      'github.com': 'GitHub - Where the world builds software',
      'youtube.com': 'YouTube - Enjoy the videos and music you love',
      'twitter.com': 'Twitter - It\'s what\'s happening',
      'linkedin.com': 'LinkedIn - Professional Network',
    };
    
    const domain = new URL(url).hostname.replace('www.', '');
    return domains[domain] || `${domain} - Official Website`;
  };

  const getMockDescription = (url) => {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.';
  };

  const getMockImage = (url) => {
    const images = {
      'github.com': 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      'youtube.com': 'https://www.youtube.com/s/desktop/0141bf10/img/favicon_144x144.png',
      'twitter.com': 'https://abs.twimg.com/responsive-web/client-web/icon-ios.77d25eba.png',
    };
    
    const domain = new URL(url).hostname.replace('www.', '');
    return images[domain] || `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  };

  return { previewData, loading, error, fetchPreview };
};