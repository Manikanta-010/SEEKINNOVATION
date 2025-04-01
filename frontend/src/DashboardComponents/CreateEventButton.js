import React, { useContext } from 'react'
import plusImg from '../assets/plus.svg'
import GlobalContext from '../context/GlobalContext'

const CreateEventButton = () => {

  const { setShowEventModal } = useContext(GlobalContext)

  return (
    <button
      onClick={() => setShowEventModal(true)}
      style={{
        border: '1px solid #E5E7EB',
        padding: '8px 16px',
        borderRadius: '9999px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease',
        cursor: 'pointer',
        color: '#1E40AF',
        fontWeight: '500'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#E8F0FE';
        e.currentTarget.style.boxShadow = '0 3px 6px rgba(0, 0, 0, 0.12)';
        e.currentTarget.style.color = '#3B82F6';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#fff';
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.color = '#1E40AF';
      }}
    >
      <img
        src={plusImg}
        alt="Create Event"
        style={{
          width: '1.5rem',
          height: '1.5rem',
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
      <span
        style={{
          paddingLeft: '0.5rem',
          fontSize: '0.875rem',
          color: 'inherit',
          fontWeight: 'bold'
        }}
      >
        Create Event
      </span>
    </button>
  )
}

export default CreateEventButton