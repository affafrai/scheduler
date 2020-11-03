import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header"
import Show from "components/Appointment/Show"
import Empty from "components/Appointment/Empty"
import Form from "components/Appointment/Form"
import useVisualMode from "hooks/useVisualMode"
import Status from "components/Appointment/Status"
import Confirm from "components/Appointment/Confirm"

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING ="SAVING";
const DELETING ="DELETING";
const CONFIRM = "CONFIRM"
const EDIT = "EDIT"

export default function Appointment(props) {
  console.log(props.interview)
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id,interview)
    .then(()=> transition(SHOW))
  }

  function deletion (name) {
    transition(DELETING);
    props.cancelInterview(props.id)
    .then(()=> transition(EMPTY))
  }

    return(
    <article className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={()=> transition(EDIT)}

        />
      )}
      {mode === CREATE && (
        <Form 
          onCancel={ () => back()}
          interviewers={props.interviewers}
          onSave={ save }
          
        />
      )}
      {mode === SAVING && ( 
        <Status
          message="Saving..."
        />
      )}
      {mode === DELETING && ( 
        <Status
          message="deleting..."
        />
      )}
      {mode === CONFIRM && ( 
        <Confirm
          onCancel={ () => back()}
          onConfirm={ deletion }
        />
      )}
      {mode === EDIT && ( 
        <Form
        onCancel={ () => transition(SHOW)}
        onSave={ save }
        interviewers={props.interviewers}
        name={props.interview.student}
        interviewer={props.interview.interviewer}
        />
      )}

    </article>
    
  )
};