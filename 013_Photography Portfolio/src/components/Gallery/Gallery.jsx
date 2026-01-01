import './Gallery.css'

// Sample photo data - replace with your own images
const photos = [
  { id: 1, category: 'portrait', title: 'Portrait Series' },
  { id: 2, category: 'landscape', title: 'Mountain Sunrise' },
  { id: 3, category: 'street', title: 'Urban Life' },
  { id: 4, category: 'portrait', title: 'Studio Session' },
  { id: 5, category: 'landscape', title: 'Ocean Waves' },
  { id: 6, category: 'street', title: 'City Lights' },
]

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery-grid">
          {photos.map((photo) => (
            <div key={photo.id} className="gallery-item">
              <div className="photo-placeholder">
                <div className="photo-overlay">
                  <h3>{photo.title}</h3>
                  <span className="category">{photo.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery