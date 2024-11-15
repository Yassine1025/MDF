import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import salon from './../../../assets/Salon/LeSalon'; // Assurez-vous que ce chemin est correct

export default function LeSalon() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleImageClick = (id) => {
    const index = salon.findIndex((item) => item.id === id);
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % salon.length);
  };

  const prevImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + salon.length) % salon.length);
  };

  // Filter items based on the search term
  const filteredSalon = salon.filter((item) =>
    item.id.toString().includes(searchTerm)
  );

  return (
    <div>
      {/* Search input with icon */}
      <div style={styles.searchContainer}>
        <i className="bi bi-search" style={styles.searchIcon}></i>
        <input
          type="text"
          placeholder="Recherch"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      <div style={styles.grid}>
        {filteredSalon.map((item) => (
          <div key={item.id} style={styles.card}>
            <img
              src={item.name}
              alt={`salon ${item.id}`}
              style={styles.image}
              onClick={() => handleImageClick(item.id)}
            />
            <div style={styles.info}>
              <p>{item.id}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div style={modalStyles.overlay} onClick={handleCloseModal}>
          <div style={modalStyles.modal} onClick={(e) => e.stopPropagation()}>
            <p style={modalStyles.imageId}>{salon[selectedIndex].id}</p>
            <img src={salon[selectedIndex].name} alt="Selected salon" style={modalStyles.image} />

            <button style={modalStyles.closeButton} onClick={handleCloseModal}>
              <i className="bi bi-x-circle-fill"></i>
            </button>

            <button
              style={{ ...modalStyles.arrowButton, left: '-30px' }}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <i className="bi bi-arrow-left-circle-fill"></i>
            </button>

            <button
              style={{ ...modalStyles.arrowButton, right: '-30px' }}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <i className="bi bi-arrow-right-circle-fill"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Styles
const styles = {
  searchContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '300px',
    margin: '20px auto',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#F7FAFC', // Warm wood-inspired color
    border: '1px solid #ffe7cd', // Darker wood color for the border
  },
  searchIcon: {
    position: 'absolute',
    left: '10px',
    color: '#ffe7cd', // Dark brown for a wood accent
    fontSize: '18px',
  },
  searchInput: {
    width: '100%',
    padding: '10px 10px 10px 35px', // Padding for icon space
    borderRadius: '10px',
    border: 'none',
    backgroundColor: 'transparent',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    outline: 'none',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px',
  },
  card: {
    width: '100%',
    maxWidth: '300px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
  },
  info: {
    marginTop: '8px',
    fontSize: '14px',
    color: '#4B3B31', // Text in a darker wood shade
  },
};

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    position: 'relative',
    width: '90%',
    maxWidth: '600px',
    maxHeight: '80%',
    backgroundColor: 'transparent',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageId: {
    marginBottom: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: '100%',
    maxWidth: '600px',
    maxHeight: '70vh',
    borderRadius: '8px',
  },
  closeButton: {
    position: 'absolute',
    top: '15px',
    right: '-10px',
    fontSize: '24px',
    color: '#FF6865',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
  },
  arrowButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '24px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    color: '#FFFFFF',
  },
};
