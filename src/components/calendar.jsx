import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import '../App.css'; // Import CSS file for custom styling

const bookedSlots = [
  { 
    title: 'Booked', 
    start: '2024-02-15T09:00:00', 
    end: '2024-02-15T09:30:00', 
    doctor: 'Dr. Smith', 
    patientName: 'John Doe',
    patientPhoneNumber: '123-456-7890'
  },
  { 
    title: 'Booked', 
    start: '2024-02-20T10:00:00', 
    end: '2024-02-20T10:30:00', 
    doctor: 'Dr. Johnson', 
    patientName: 'Jane Doe',
    patientPhoneNumber: '987-654-3210'
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
      <h2>Monthly Calendar View with Booked Slots</h2>
      <div className="calendar">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay'
          }}
          events={bookedSlots}
          eventClick={handleEventClick}
        />
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Event Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Doctor: {eventInfo && eventInfo.event.extendedProps.doctor} <br />
            Patient Name: {eventInfo && eventInfo.event.extendedProps.patientName} <br />
            Patient Phone Number: {eventInfo && eventInfo.event.extendedProps.patientPhoneNumber} <br />
            Start Time: {eventInfo && eventInfo.event.startStr}
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
