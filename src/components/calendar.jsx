import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import './Calendar.css'; // Import CSS file for custom styling

const bookedSlots = [
    { 
      title: 'Booked', 
      start: '2024-02-15T10:00:00', 
      end: '2024-02-15T10:30:00', 
      doctor: 'Dr. Smith', 
      patientName: 'Alice Johnson',
      patientPhoneNumber: '111-222-3333'
    },
    { 
      title: 'Booked', 
      start: '2024-02-16T10:30:00', 
      end: '2024-02-16T11:00:00', 
      doctor: 'Dr. Brown', 
      patientName: 'Bob Anderson',
      patientPhoneNumber: '444-555-6666'
    },
    { 
      title: 'Booked', 
      start: '2024-02-17T10:00:00', 
      end: '2024-02-17T10:30:00', 
      doctor: 'Dr. Johnson', 
      patientName: 'Charlie Lee',
      patientPhoneNumber: '777-888-9999'
    },
    // Add more booked slots as needed
  ];
  

function MonthlyCalendar() {
  const [open, setOpen] = useState(false);
  const [eventInfo, setEventInfo] = useState(null);

  function handleEventClick(eventInfo) {
    setEventInfo(eventInfo);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="calendar-container">
      <div className="calendar">
        <FullCalendar
          plugins={[timeGridPlugin, dayGridPlugin]} // Include interactionPlugin
          initialView="timeGridWeek"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          events={bookedSlots}
          eventClick={handleEventClick}
        //   editable={true} // Make events editable
        //   droppable={true} // Make events droppable
        />
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Event Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Doctor: {eventInfo && eventInfo.event.extendedProps.doctor} <br />
            Patient Name: {eventInfo && eventInfo.event.extendedProps.patientName} <br />
            Patient Phone Number: {eventInfo && eventInfo.event.extendedProps.patientPhoneNumber} <br />
            Start Time: {eventInfo && new Date(eventInfo.event.start).toLocaleTimeString()} <br />
            End Time: {eventInfo && new Date(eventInfo.event.end).toLocaleTimeString()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MonthlyCalendar;
