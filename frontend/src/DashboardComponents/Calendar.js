import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import GlobalContext from '../context/GlobalContext'
import dayjs from 'dayjs'

const Calendar = () => {

  const { monthIndex, setMonthIndex } = useContext(GlobalContext)

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1)
  }
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1)
  }
  const handleReset = () => {
    setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
  }

  return (
    <header style={{
      padding: '0.5rem 1rem',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      opacity: 1 // Removed animation and set opacity directly
    }}>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" style={{
          marginRight: '0.5rem',
          width: '3rem',
          height: '3rem'
        }} />
        <h1 style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          background: "linear-gradient(90deg, #1E40AF, #3B82F6)", // Gradient Blue
          WebkitBackgroundClip: "text",
          color: "transparent",
          transition: "color 0.3s ease-in-out",
          cursor: "pointer"
        }}
          onMouseEnter={(e) => e.target.style.color = "#1E40AF"}
          onMouseLeave={(e) => e.target.style.color = "transparent"}>
          Calendar
        </h1>
      </div>

      <div style={{
        flex: 1,
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          background: "linear-gradient(90deg, #1E40AF, #3B82F6)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          transition: "color 0.3s ease-in-out",
          cursor: "pointer"
        }}
          onMouseEnter={(e) => e.target.style.color = "#1E40AF"}
          onMouseLeave={(e) => e.target.style.color = "transparent"}>
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
      </div>



      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={handleReset} style={{
          border: '1px solid #D1D5DB',
          borderRadius: '0.25rem',
          padding: '0.5rem 1rem',
          marginRight: '1.25rem',
          backgroundColor: '#fff',
          transition: 'background-color 0.3s ease, transform 0.2s ease, color 0.3s ease',
          cursor: 'pointer',
          color: '#1E40AF'
        }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#f3f4f6';
            e.target.style.color = '#3B82F6';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#fff';
            e.target.style.color = '#1E40AF';
          }}>
          Today
        </button>

        <button onClick={handlePrevMonth} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <span className="material-icons-outlined" style={{
            margin: '0 0.5rem',
            transition: 'transform 0.2s ease, color 0.3s ease',
            color: '#1E40AF'
          }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.5)';
              e.target.style.color = '#3B82F6';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.color = '#1E40AF';
            }}>
            chevron_left
          </span>
        </button>

        <button onClick={handleNextMonth} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <span className="material-icons-outlined" style={{
            margin: '0 0.5rem',
            transition: 'transform 0.2s ease, color 0.3s ease',
            color: '#1E40AF'
          }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.5)';
              e.target.style.color = '#3B82F6';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.color = '#1E40AF';
            }}>
            chevron_right
          </span>
        </button>
      </div>
    </header>
  )
}

export default Calendar