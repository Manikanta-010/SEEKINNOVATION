import React from 'react'
import CreateEventButton from './CreateEventButton'
import SmallCalendar from './SmallCalendar'
import Labels from './Labels'

const CalSidebar = () => {
  return (
    <aside style={{ 
      border: '1px solid #E5E7EB', 
      padding: '20px', 
      width: '16rem', 
      backgroundColor: '#ffffff', 
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)'
    }} >
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  )
}

export default CalSidebar