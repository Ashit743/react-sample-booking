import MonthlyCalendar from "./components/calendar/Calendar"
import "./App.css"
import DoctorComponent from "./components/manualAppointment/availableDoctors"

function App() {

  return (
   <div>
      <div className="calendar">
        <MonthlyCalendar></MonthlyCalendar>
        <DoctorComponent></DoctorComponent>
      </div>
   </div>
  )
}



export default App
