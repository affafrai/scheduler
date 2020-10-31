


export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(days => days.name === day);
 const appoinmentsresult = [];
 if (filteredDays.length === 0){
   return [];
 } 
  for(let id of filteredDays[0].appointments){
    for(let key in state.appointments){
      if (id === parseInt(key)){
        appoinmentsresult.push(state.appointments[key]);
      }
    }
 }
  return appoinmentsresult;
}
const state = {
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "4": { id: 4, time: "3pm", interview: null },
    "5": {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 }
    }
  },
  interviewers: {
    "1": {  
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    }
  }
};



 export function getInterview(state, interview){
   if(interview === null){
     return null;
   }
   console.log("state is = ", state)
   console.log("interview is = ", interview)
   const interviewresult = {interviewer: {...state.interviewers[interview.interviewer]},student:interview.student  }
   return interviewresult;
  //  console.log("state:   ",state)
  //  console.log("interview:   ",interview)

  //  console.log("state.appointments[3].interview:   ",state.appointments[3].interview)
  //  console.log("state.interviewer", state.interviewer[] )
  // const filteredInterview = state.appointments.filter(interviews => parseInt(appointments.id)=== interview);
  // console.log(filteredInterview)
  // if (filteredInterview.interview === null){
  //   return null;
  // } 
  // return filteredInterview;

}
// getInterview(state, state.appointments["2"].interview)


