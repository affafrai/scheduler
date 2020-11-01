


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

 export function getInterview(state, interview){
   if(interview === null){
     return null;
   }
   const interviewresult = {interviewer: {...state.interviewers[interview.interviewer]},student:interview.student  }
   return interviewresult;
}


