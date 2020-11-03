import {useState, useEffect} from "react";
import axios from "axios"

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  const setDay = day => setState({ ...state, day });

  function cancelInterview(id) {
    console.log(id);
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.delete(`/api/appointments/${id}`)
    .then(()=>{
      setState(getSpots({
      ...state,
      appointments
    }));
    
    return true;
    })
  }

  function bookInterview(id, interview) {
    console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`,{interview})
    .then(()=>{
      setState(getSpots({
      ...state,
      appointments
    }));
    return true;})
  }
  
  function getSpots (state ){
    const days = state.days.map(day=>{
      const spots = day.appointments.filter(id=>state.appointments[id].interview === null).length
      return {...day, spots}})
      return {...state, days}
  }


  useEffect(() => {
    // console.log("hello use effect")
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      // console.log(state.days)
      setState(prev =>({...prev, days:all[0].data, appointments:all[1].data, interviewers:all[2].data}))
    })
      .catch(error => {console.error(error.message)} );
  }, [])
  console.log("state",state)
  return{state,setDay,bookInterview,cancelInterview}
}
