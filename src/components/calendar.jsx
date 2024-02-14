import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import './Calendar.css'; // Import CSS file for custom styling

const initialBookedSlots = [
  { 
    title: 'Booked', 
    start: '2024-02-15T10:00:00', 
    end: '2024-02-15T10:30:00', 
    doctor: 'Dr. Arun', 
    patientName: 'Pratam H',
    patientPhoneNumber: '111-222-3333'
  },
  { 
    title: 'Booked', 
    start: '2024-02-16T10:30:00', 
    end: '2024-02-16T11:00:00', 
    doctor: 'Dr. Rakesh', 
    patientName: 'Pratam H',
    patientPhoneNumber: '444-555-6666'
  },
  { 
    title: 'Booked', 
    start: '2024-02-17T10:00:00', 
    end: '2024-02-17T10:30:00', 
    doctor: 'Dr. Krishna', 
    patientName: 'Pratam H',
    patientPhoneNumber: '777-888-9999'
  },
  // Add 10 more booked slots with different doctor names
  { 
    title: 'Booked', 
    start: '2024-02-19T10:00:00', 
    end: '2024-02-19T10:30:00', 
    doctor: 'Dr. Smith', 
    patientName: 'Pratam H',
    patientPhoneNumber: '111-222-3333'
  },
  { 
    title: 'Booked', 
    start: '2024-02-21T10:30:00', 
    end: '2024-02-21T11:00:00', 
    doctor: 'Dr. Patel', 
    patientName: 'Pratam H',
    patientPhoneNumber: '444-555-6666'
  },
  { 
    title: 'Booked', 
    start: '2024-02-23T10:00:00', 
    end: '2024-02-23T10:30:00', 
    doctor: 'Dr. Khan', 
    patientName: 'Pratam H',
    patientPhoneNumber: '777-888-9999'
  },
  { 
    title: 'Booked', 
    start: '2024-02-25T10:00:00', 
    end: '2024-02-25T10:30:00', 
    doctor: 'Dr. Gupta', 
    patientName: 'Pratam H',
    patientPhoneNumber: '111-222-3333'
  },
  { 
    title: 'Booked', 
    start: '2024-02-27T10:30:00', 
    end: '2024-02-27T11:00:00', 
    doctor: 'Dr. Sharma', 
    patientName: 'Pratam H',
    patientPhoneNumber: '444-555-6666'
  },
  { 
    title: 'Booked', 
    start: '2024-02-29T10:00:00', 
    end: '2024-02-29T10:30:00', 
    doctor: 'Dr. Singh', 
    patientName: 'Pratam H',
    patientPhoneNumber: '777-888-9999'
  },
  { 
    title: 'Booked', 
    start: '2024-03-02T10:00:00', 
    end: '2024-03-02T10:30:00', 
    doctor: 'Dr. Mishra', 
    patientName: 'Pratam H',
    patientPhoneNumber: '111-222-3333'
  },
  { 
    title: 'Booked', 
    start: '2024-03-04T10:30:00', 
    end: '2024-03-04T11:00:00', 
    doctor: 'Dr. Joshi', 
    patientName: 'Pratam H',
    patientPhoneNumber: '444-555-6666'
  }
];

  

function MonthlyCalendar() {
  const [open, setOpen] = useState(false);
  const [eventInfo, setEventInfo] = useState(null);
  const [bookedSlots, setBookedSlots] = useState(initialBookedSlots);



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
          plugins={[timeGridPlugin, dayGridPlugin,interactionPlugin]} // Include interactionPlugin
          initialView="timeGridWeek"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          events={bookedSlots}
          eventClick={handleEventClick}
          selectable ={true}
          aspectRatio={2.2}

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
