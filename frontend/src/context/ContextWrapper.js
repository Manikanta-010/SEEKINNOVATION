import React, { useEffect, useMemo, useReducer, useState } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'


const savedEventsReducer = (state, {type, payload}) => {
    switch (type) {
      case 'push':
        return [...state, payload];
      case 'update':
        return state.map((evt) => 
        evt.id === payload.id ? payload : evt);
      case 'delete':
        return state.filter((evt) => evt.id !== payload.id)
      default:
        throw new Error();
    }
}

const initEvents = () => {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : []
  return parsedEvents
}


const ContextWrapper = (props) => {

    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [showEventModal, setShowEventModal] = useState(false);
    const [daySelected, setDaySelected] = useState(dayjs());
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [labels, setLabels] = useState([]);
    const [savedEvents, dispatchCalEvent] = useReducer(
      savedEventsReducer,
      [],
      initEvents
    );

    const filteredEvents = useMemo(() => {
      return savedEvents.filter((evt) => 
        labels.filter((lbl) => lbl.checked)
      .map((lbl) => lbl.label)
      .includes(evt.label)
      );
    }, [savedEvents, labels])
    
    useEffect(() => {
      localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
    }, [savedEvents]);

    useEffect(() => {
      setLabels((prevLabels) => {
        return [...new Set(savedEvents.map((evt) => evt.label))].map(
          (label) => {
            const currentLabel = prevLabels.find(
              (lbl) => lbl.label === label
            );
            return {
              label,
              checked: currentLabel ? currentLabel.checked : true,
            }
          }
        )
      })
    }, [savedEvents])

    useEffect(() => {
      if (smallCalendarMonth !== null) {
        setMonthIndex(smallCalendarMonth)
      }
    }, [smallCalendarMonth]);

    useEffect(() => {
      if(!showEventModal) {
        setSelectedEvent(null)
      }
    }, [showEventModal]);

    const updateLabel = (label) => {
      setLabels(labels.map((lbl) => lbl.label === label.label ? label : lbl))
    }

  return (
    <GlobalContext.Provider value={{ 
      monthIndex, setMonthIndex,
      smallCalendarMonth, setSmallCalendarMonth,
      showEventModal, setShowEventModal,
      daySelected, setDaySelected,
      selectedEvent, setSelectedEvent,
      labels, setLabels,
      updateLabel, filteredEvents,
      dispatchCalEvent, savedEvents
      }}>
        {props.children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper                                        