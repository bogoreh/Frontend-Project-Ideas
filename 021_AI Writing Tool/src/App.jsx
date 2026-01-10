import { useState } from 'react'
import Header from './components/Header'
import WritingArea from './components/WritingArea'
import ToolsPanel from './components/ToolsPanel'
import './index.css'

function App() {
  const [content, setContent] = useState('')
  const [writingHistory, setWritingHistory] = useState([])
  const [isProcessing, setIsProcessing] = useState(false)

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <WritingArea 
          content={content}
          setContent={setContent}
          isProcessing={isProcessing}
        />
        <ToolsPanel 
          content={content}
          setContent={setContent}
          writingHistory={writingHistory}
          setWritingHistory={setWritingHistory}
          setIsProcessing={setIsProcessing}
        />
      </main>
      
      <footer className="footer">
        <p>AI Writing Assistant • Powered by AI • Made with ❤️</p>
      </footer>
    </div>
  )
}

export default App