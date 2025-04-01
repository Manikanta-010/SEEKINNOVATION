import React from 'react'
import Day from './Day'

const Month = ({ month }) => {
  return (
    <div style={{flex: 1, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gridTemplateRows: 'repeat(5, 1fr)', background: 'linear-gradient(to bottom, #f0f9ff, #e0f2fe)' }}>
        {month.map((row, i) => (
            <React.Fragment key={i}>
                {row.map((day, idx) => (
                    <Day day={day} key={idx} rowIdx={i}/>
                ))}
            </React.Fragment>
        ))}
    </div>
  )
}

export default Month