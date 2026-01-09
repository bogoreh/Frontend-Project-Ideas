import './ProgressBar.css'

function ProgressBar({ progress }) {
  const getProgressColor = (progress) => {
    if (progress < 30) return '#e74c3c'
    if (progress < 70) return '#f39c12'
    return '#2ecc71'
  }

  return (
    <div className="progress-container">
      <div 
        className="progress-bar"
        style={{
          width: `${progress}%`,
          backgroundColor: getProgressColor(progress)
        }}
      ></div>
      <div className="progress-labels">
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>
  )
}

export default ProgressBar