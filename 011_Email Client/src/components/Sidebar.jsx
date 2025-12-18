function Sidebar({ folders, currentFolder, setCurrentFolder }) {
  return (
    <div className="sidebar">
      <button className="compose-btn">
        <span>✏️</span>
        <span>Compose</span>
      </button>
      
      <div className="folders">
        {folders.map(folder => (
          <button
            key={folder.id}
            className={`folder-btn ${currentFolder === folder.id ? 'active' : ''}`}
            onClick={() => setCurrentFolder(folder.id)}
          >
            <span className="folder-icon">{folder.icon}</span>
            <span className="folder-name">{folder.name}</span>
            {folder.count > 0 && (
              <span className="folder-count">{folder.count}</span>
            )}
          </button>
        ))}
      </div>
      
      <div className="labels">
        <h3>Labels</h3>
        <div className="label">🏷️ Personal</div>
        <div className="label">🏷️ Work</div>
        <div className="label">🏷️ Travel</div>
        <div className="label">🏷️ Finance</div>
      </div>
    </div>
  )
}

export default Sidebar