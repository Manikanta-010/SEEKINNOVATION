import dayjs from 'dayjs'
import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext'
import { getMonth } from '../util';

const SmallCalendar = () => {

    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth(dayjs().month()));

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx))
    }, [currentMonthIdx])

    const { monthIndex, setSmallCalendarMonth, setDaySelected, daySelected } = useContext(GlobalContext)

    useEffect(() => {
        setCurrentMonthIdx(monthIndex)
    }, [monthIndex]);

    const handlePrevMonth = () => {
        setCurrentMonthIdx(currentMonthIdx - 1)
    }

    const handleNextMonth = () => {
        setCurrentMonthIdx(currentMonthIdx + 1)
    }

    function getDayClass(day) {
        const format = "DD-MM-YY";
        const nowDay = dayjs().format(format);
        const currDay = day.format(format);
        const slcDay = daySelected && daySelected.format(format)

        if (nowDay === currDay) {
            return {
                backgroundColor: '#3B82F6',
                borderRadius: '50%',
                color: '#FFFFFF',
                fontWeight: 'bold',
            };
        } else if (currDay === slcDay) {
            return {
                backgroundColor: '#DBEAFE',
                borderRadius: '50%',
                color: '#2563EB',
                fontWeight: 'bold',
            }
        } else {
            return {};
        }
    }

    return (
        <div style={{ marginTop: '2.25rem' }}>
            <header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', padding: '6px 0' }}>
                <p style={{ color: '#2563EB', fontWeight: 'bold', fontSize: '1rem', margin: '0' }}>
                    {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
                </p>

                <button onClick={handlePrevMonth} style={{ position: 'absolute', left: '10px', background: 'none', border: 'none', cursor: 'pointer' }}>
                    <span className='material-icons-outlined' style={{ color: '#374151', fontSize: '1.5rem', transition: 'color 0.2s ease-in-out' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "#2563EB"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "#374151"}>
                        chevron_left
                    </span>
                </button>

                <button onClick={handleNextMonth} style={{ position: 'absolute', right: '10px', background: 'none', border: 'none', cursor: 'pointer' }}>
                    <span className='material-icons-outlined' style={{ color: '#374151', fontSize: '1.5rem', transition: 'color 0.2s ease-in-out' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "#2563EB"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "#374151"}>
                        chevron_right
                    </span>
                </button>
            </header>


            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gridTemplateRows: 'repeat(6, 1fr)',
                gap: '3px',
                marginTop: '0.5rem'
            }}>
                {currentMonth[0].map((day, i) => (
                    <span key={i} style={{
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        textAlign: 'center',
                        color: day.format("dd") === dayjs().format("dd") ? "#DC2626" : "#374151",
                    }}>
                        {day.format("dd").charAt(0)}
                    </span>
                ))}
                {currentMonth.map((row, i) => (
                    <React.Fragment key={i}>
                        {row.map((day, idx) => (
                            <button key={idx}
                                onClick={() => {
                                    setSmallCalendarMonth(currentMonthIdx);
                                    setDaySelected(day)
                                }}
                                style={{
                                    padding: '0.25rem 0',
                                    width: '100%',
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                    cursor: 'pointer',
                                    ...getDayClass(day)
                                }} aria-label={`Select date ${day.format("D MMMM YYYY")}`}
                                onMouseEnter={(e) => {
                                    if (!day.isSame(dayjs(), 'day')) {
                                        const spanEl = e.currentTarget.querySelector('span');
                                        if (spanEl) {
                                            spanEl.style.transition = "color 0.3s ease-in-out";
                                            spanEl.style.color = "#3B82F6";
                                        }
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!day.isSame(dayjs(), 'day')) {
                                        const spanEl = e.currentTarget.querySelector('span');
                                        if (spanEl) {
                                            spanEl.style.color = "#374151";
                                        }
                                    }
                                }}
                            >
                                <span style={{
                                    fontSize: '0.875rem',
                                    color: day.isSame(dayjs(), 'day')
                                        ? '#fff' // Today's date white
                                        : (daySelected && daySelected.isSame(day, 'day')
                                            ? '#1D4ED8' // Selected date dark blue
                                            : '#374151'), // Default color
                                    fontWeight: (daySelected && daySelected.isSame(day, 'day'))
                                        ? 'bold' // Selected date should be bold
                                        : 'normal'
                                }}>
                                    {day.format("D")}
                                </span>

                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default SmallCalendar