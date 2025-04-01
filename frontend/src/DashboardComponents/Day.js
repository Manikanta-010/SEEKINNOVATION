import dayjs from 'dayjs'
import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext';

const Day = ({ day, rowIdx }) => {

  const [dayEvents, setDayEvents] = useState([]);
  const { setDaySelected,
        setShowEventModal,
        filteredEvents,
        setSelectedEvent } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter((evt) =>
      dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY"));
    setDayEvents(events)
  }, [filteredEvents, day]);


  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? { backgroundColor: '#2563EB', color: '#FFFFFF', borderRadius: '50%', width: '1.75rem', height: '1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }
      : {};
  }

  const colorMap = {
    red: "#FECACA",
    blue: "#BFDBFE",
    green: "#D1FAE5",
    yellow: "#FEF08A",
    purple: "#E9D5FF",
  };

  return (
    <div style={{ border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', transition: 'background-color 0.2s ease-in-out', cursor: 'pointer' }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'} >
      <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px' }}>
        {rowIdx === 0 && (
          <p style={{ fontSize: '0.875rem', marginTop: '0.25rem', fontWeight: 'bold', color: '#6B7280' }}>{day.format('ddd').toUpperCase()}</p>
        )}
        <p style={{
          ...getCurrentDayClass(),
          fontSize: '0.875rem',
          padding: '0.5rem',
          margin: '0.25rem 0',
          textAlign: 'center',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          transition: 'background-color 0.2s ease-in-out',
          backgroundColor: day.isSame(dayjs(), "day") ? "#2563EB" : "transparent",
          color: day.isSame(dayjs(), "day") ? "#FFFFFF" : "#000000",
          fontWeight: day.isSame(dayjs(), "day") ? "bold" : "normal"
        }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = day.isSame(dayjs(), "day") ? "#2563EB" : "transparent";
          }}
        >{day.format("DD")}</p>
      </header>
      <div style={{
        flex: 1,
        cursor: "pointer",
      }} onClick={() => {
        setDaySelected(day)
        setShowEventModal(true)
      }}
      >
        {dayEvents.map((evt, idx) => (
          <div key={idx}
            onClick={() => setSelectedEvent(evt)}
            style={{
              backgroundColor: colorMap[evt.label] || "#E5E7EB",
              padding: "4px",
              marginRight: "12px",
              color: "#4b5563",
              fontSize: "14px",
              borderRadius: "4px",
              marginBottom: "4px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Day