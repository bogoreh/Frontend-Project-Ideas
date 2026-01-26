export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and how to build your first application.",
    content: `# Getting Started with React

React is a popular JavaScript library for building user interfaces. It was developed by Facebook and has become one of the most widely used frontend libraries.

## Why Choose React?

1. **Component-Based Architecture**: Build encapsulated components that manage their own state
2. **Virtual DOM**: Efficient updates and rendering
3. **Rich Ecosystem**: Huge community and plenty of libraries
4. **Reusable Components**: Write once, use anywhere in your application

## Installation

To create a new React application, you can use Vite:

\`\`\`bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
\`\`\`

## Your First Component

\`\`\`jsx
function Welcome() {
  return <h1>Hello, React!</h1>;
}

export default Welcome;
\`\`\`

> **Tip**: React components must start with a capital letter and return a single JSX element.

## Key Concepts

- **JSX**: JavaScript XML syntax extension
- **Components**: Building blocks of React applications
- **Props**: Pass data to components
- **State**: Manage component data
- **Hooks**: Functions that let you use state and other React features

## Conclusion

React makes it easy to build interactive UIs. Start with simple components and gradually learn advanced concepts like hooks and context.`,
    author: "Jane Doe",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "React",
    tags: ["React", "JavaScript", "Frontend"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Mastering Markdown",
    excerpt: "A comprehensive guide to writing effective documentation with Markdown.",
    content: `# Mastering Markdown

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world's most popular markup languages.

## Basic Syntax

### Headers

\`\`\`markdown
# H1 Header
## H2 Header
### H3 Header
#### H4 Header
##### H5 Header
###### H6 Header
\`\`\`

### Emphasis

\`\`\`markdown
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_
\`\`\`

### Lists

#### Unordered
\`\`\`markdown
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3
\`\`\`

#### Ordered
\`\`\`markdown
1. First item
2. Second item
3. Third item
   1. Indented item
   2. Another indented item
\`\`\`

### Code

Inline code: \`console.log('Hello')\`

Code blocks:
\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

### Tables

\`\`\`markdown
| Syntax | Description |
|--------|-------------|
| Header | Title |
| Paragraph | Text |
\`\`\`

## Advanced Features

### Task Lists

\`\`\`markdown
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
\`\`\`

### Footnotes

Here's a sentence with a footnote.[^1]

[^1]: This is the footnote.

## Conclusion

Markdown is versatile and easy to learn. Whether you're writing documentation, blog posts, or README files, Markdown has you covered.

> "Good documentation is like a good map: it shows you where you are and helps you get where you want to go." – Unknown`,
    author: "John Smith",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Writing",
    tags: ["Markdown", "Documentation", "Writing"],
    image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Progressive Web Apps Explained",
    excerpt: "Learn how PWAs combine the best of web and mobile apps.",
    content: `# Progressive Web Apps Explained

Progressive Web Apps (PWAs) are web applications that use modern web capabilities to deliver an app-like experience to users. They're reliable, fast, and engaging.

## What Makes a PWA?

### 1. Reliable
- Load instantly, even in uncertain network conditions
- Service workers enable offline functionality

### 2. Fast
- Respond quickly to user interactions
- Smooth animations and scrolling

### 3. Engaging
- Feel like a native app
- Can be installed on the home screen
- Receive push notifications

## Core Components

### Service Workers
Service workers act as a proxy between your app and the network. They enable:

- Offline functionality
- Background sync
- Push notifications

\`\`\`javascript
// Basic service worker registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
      console.log('Service Worker registered');
    });
}
\`\`\`

### Web App Manifest
The manifest file tells the browser about your web application:

\`\`\`json
{
  "name": "My PWA",
  "short_name": "PWA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#3b82f6"
}
\`\`\`

## Benefits of PWAs

1. **Cross-platform**: Works on any device with a browser
2. **No app store required**: Users can install directly from the website
3. **Smaller size**: Much smaller than native apps
4. **Always up-to-date**: No manual updates required
5. **Discoverable**: Can be found through search engines

## Implementation Checklist

- [ ] Implement HTTPS
- [ ] Create responsive design
- [ ] Add app manifest
- [ ] Implement service worker
- [ ] Enable add to home screen
- [ ] Test across browsers

## Conclusion

PWAs represent the future of web development, offering native-like experiences with the reach of the web. Start by adding a service worker to your existing web app and gradually add more PWA features.`,
    author: "Alex Johnson",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Web Development",
    tags: ["PWA", "Web Development", "JavaScript"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];