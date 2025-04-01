import React, { useContext, useState } from 'react'
import GlobalContext from '../context/GlobalContext'


    const labelsClasses = ["gray", "green", "blue", "red", "purple"];

const EventModal = () => {

    const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } = useContext(GlobalContext);

    const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
    const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : "");
    const [selectedLabel, setSelectedLabel] = useState(selectedEvent ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
    : labelsClasses[0]);
    const [isFocused, setIsFocused] = useState(false);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        const calenderEvent = {
            title,
            description,
            label: selectedLabel,
            day: daySelected.valueOf(),
            startTime,
            endTime,
            id: selectedEvent ? selectedEvent.id : Date.now(),
        };
        if (selectedEvent) {
            dispatchCalEvent({ type: 'update', payload: calenderEvent });
        } else {
            dispatchCalEvent({ type: 'push', payload: calenderEvent });
        }
        setShowEventModal(false)
    }

    return (
        <div style={{
            height: "100vh", width: "100%", position: "fixed", padding: "1rem",
            left: 0, top: 0, display: "flex", justifyContent: "center", alignItems: "center"
        }}>

            <form style={{
                backgroundColor: "white", borderRadius: "0.5rem",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", width: "400px", maxWidth: "90%"
            }}>
                <header style={{
                    backgroundColor: "#f3f4f6",
                    padding: "0.5rem 1rem", display: "flex",
                    justifyContent: "space-between", alignItems: "center"
                }}>
                    <span className="material-icons-outlined" style={{ color: "#9ca3af" }}>
                        drag_handle
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    {selectedEvent && (
                        <span 
                            onClick={() => {
                                dispatchCalEvent({
                                    type: "delete", 
                                    payload: selectedEvent,
                                });
                                setShowEventModal(false);
                            }}
                            className="material-icons-outlined" 
                            style={{ color: "#9ca3af", cursor: "pointer" }}
                        >
                            delete
                        </span>
                    )}
                    <button type="button" style={{ border: "none", display: "flex", justifyContent: "center", alignItems: "center", background: "transparent", cursor: "pointer" }}
                        onClick={() => setShowEventModal(false)}>
                        <span className="material-icons-outlined" style={{ color: "#9ca3af" }}>
                            close
                        </span>
                    </button>
                    </div>
                </header>

                <div style={{ padding: "0.50rem" }}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 5fr",
                        alignItems: "center",
                        rowGap: "1rem",
                    }}>
                        <div></div>
                        <input type="text" name="title" placeholder="Add title" value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required style={{
                                paddingTop: "0.75rem",
                                paddingBottom: "0.5rem",
                                border: "0",
                                color: "#4B5563",
                                fontSize: "1.25rem",
                                fontWeight: "600",
                                width: "100%",
                                borderBottomWidth: "2px",
                                borderBottomStyle: "solid",
                                borderBottomColor: isFocused === "title" ? "#3B82F6" : "#E5E7EB",
                                outline: "none",
                                transition: "border-color 0.3s ease-in-out",
                            }}
                            onFocus={() => setIsFocused("title")}
                            onBlur={() => setIsFocused(false)}
                        />

                        <span className="material-icons-outlined" style={{ color: "#9ca3af" }}>
                            schedule
                        </span>

                        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap"}}>
                            <p style={{ margin: 0, fontWeight: "600", whiteSpace: "nowrap", fontSize: "17px", color: "#6B7280" }}>{daySelected.format("dddd, MMMM DD")}</p>

                            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                                <input type="time"
                                    value={startTime} onChange={(e) => setStartTime(e.target.value)}
                                    style={{
                                        border: "1px solid #d1d5db",
                                        borderRadius: "6px",
                                        padding: "6px 10px",
                                        outline: "none",
                                        width: "120px",
                                        fontSize: "0.9rem",
                                        backgroundColor: "#f9fafb",
                                        color: "#6B7280",
                                        transition: "border 0.4s ease-in-out",
                                        accentColor: "#3B82F6",
                                        colorScheme: "dark light",
                                    }}
                                    onFocus={(e) => e.target.style.border = "2px solid #6B7280"}
                                    onBlur={(e) => e.target.style.border = "1px solid #d1d5db"}
                                />

                                <input type="time"
                                    value={endTime} onChange={(e) => setEndTime(e.target.value)}
                                    style={{
                                        border: "1px solid #d1d5db",
                                        borderRadius: "6px",
                                        padding: "6px 10px",
                                        outline: "none",
                                        width: "120px",
                                        fontSize: "0.9rem",
                                        backgroundColor: "#f9fafb",
                                        color: "#6B7280",
                                        transition: "border 0.4s ease-in-out",
                                    }}
                                    onFocus={(e) => e.target.style.border = "2px solid #6B7280"}
                                    onBlur={(e) => e.target.style.border = "1px solid #d1d5db"}
                                />
                            </div>
                        </div>

                        <span className="material-icons-outlined" style={{ color: "#9ca3af" }}>
                            segment
                        </span>
                        <input type="text" 
                         name="description" placeholder="Add a description"
                         value={description} required onChange={(e) => setDescription(e.target.value)}
                         style={{
                            paddingTop: "0.75rem",
                            paddingBottom: "0.5rem",
                            border: "0",
                            color: "#4B5563",
                            fontSize: "1.25rem",
                            fontWeight: "600",
                            width: "100%",
                            borderBottomWidth: "2px",
                            borderBottomStyle: "solid",
                            borderBottomColor: isFocused === "description" ? "#3B82F6" : "#E5E7EB",
                            outline: "none",
                            transition: "border-color 0.3s ease-in-out",
                        }}
                            onFocus={() => setIsFocused("description")}
                            onBlur={() => setIsFocused(false)}
                          />



                        <span className="material-icons-outlined" style={{ color: "#9ca3af" }}>
                            bookmark_border
                        </span>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {labelsClasses.map((lblClass, i) => (
                                <span key={i}
                                onClick={() => setSelectedLabel(lblClass)}
                                    style={{
                                    backgroundColor: lblClass,
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    }}
                                >
                                    {selectedLabel === lblClass && (
                                        <span className="material-icons-outlined" style={{ color: "#9ca3af", fontSize: "14px"}}>
                                        check
                                    </span>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <footer 
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        borderTop: "1px solid #e5e7eb",
                        padding: "12px",
                        marginTop: "20px",
                    }}>
                    <button type='submit'
                        onClick={handleSubmit}
                        style={{
                            backgroundColor: "#3b82f6",
                            padding: "8px 24px",
                            borderRadius: "6px",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
                        onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
                        >
                        Save
                    </button>
                </footer>
            </form>
        </div>
    )
}

export default EventModal


