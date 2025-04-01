import React, { useContext, useEffect, useState } from 'react'
import { getMonth } from '../util'
import Calendar from './Calendar'
import CalSidebar from './CalSidebar'
import Month from './Month'
import GlobalContext from '../context/GlobalContext'
import EventModal from './EventModal'

const Agenda = () => {

    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex, showEventModal } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);


    return (
        <React.Fragment>
            <h2
                style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "16px",
                    color: "#1E40AF", // Default deep blue color
                    transition: "color 0.3s ease-in-out", // Smooth color transition
                    opacity: 1,
                    cursor: "pointer"
                }}
                onMouseEnter={(e) => e.target.style.color = "#3B82F6"} // Lighter blue on hover
                onMouseLeave={(e) => e.target.style.color = "#1E40AF"} // Back to normal
            >
                Google Calendar API
            </h2>

            {showEventModal && <EventModal />}

            <div style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#f3f4f6"
            }}>
                <Calendar />
                <div style={{ display: "flex", flex: 1 }}>
                    <CalSidebar />
                    <Month month={currentMonth} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Agenda