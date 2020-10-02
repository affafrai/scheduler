import React, {useState, useEffect} from "react";
import axios from "axios"
import "components/Application.scss";
import DayList from "components/DayList"
import Appointment from "components/Appointment"

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "10am",
    interview: {
      student: "Affaf Rai",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 4,
    time: "5pm",
  },
  {
    id: 5,
    time: "11am",
  }
];

const setName = name => console.log(name);
setName("affaf");

const renderAppointment = (appointment) => {
  const {id,time,interview} = appointment;
  return (
    <Appointment key={id} {...appointment}/>    
  )
}

export default function Application(props) {
  const[day, setDay] = useState([])
  const[results, setResults] = useState([])


  useEffect(() => {
    axios.get("http://localhost:8001/api/days").then(response => {
      setResults(response.data)
      console.log("response.data",response.data)
    })
    .catch(error => {console.error(error.message)} );
  }, [])

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList
          days={results}
          day={day}
          setDay={setDay}
        />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">

      {appointments.map(renderAppointment)}
      <Appointment key="last" time="5pm" />

      </section>
    </main>
  );  
}
