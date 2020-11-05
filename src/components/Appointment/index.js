import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header"
import Show from "components/Appointment/Show"
import Empty from "components/Appointment/Empty"
import Form from "components/Appointment/Form"
import useVisualMode from "hooks/useVisualMode"
import Status from "components/Appointment/Status"
import Confirm from "components/Appointment/Confirm"
import Error from "components/Appointment/Error"


const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING ="SAVING";
const DELETING ="DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_DELETE ="ERROR_DELETE";
const ERROR_SAVE ="ERROR_SAVE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY

  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props
    .bookInterview(props.id,interview)
    .then(()=> transition(SHOW))
    .catch(error=> transition(ERROR_SAVE,true))
  }

  function destroy () {
    transition(DELETING,true);
    props
    .cancelInterview(props.id)
    .then(()=> transition(EMPTY))
    .catch(error=> transition(ERROR_DELETE,true))
  }

    return(
    <article className="appointment" data-testid="appointment">
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
          onConfirm={ destroy }
        />
      )}
      {mode === EDIT && ( 
        <Form
        onCancel={ () => transition(SHOW)}
        onSave={ save }
        interviewers={props.interviewers}
        name={props.interview.student}
        interviewer={props.interview.interviewer.id}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error
        message="could not delete appointment"
        onClose={ () => transition(SHOW)}
        />
      )}
      {mode === ERROR_SAVE && (
        <Error
        message="could not save appointment"
        onClose={ () => back()}
        />
      )}
    </article>
  )
};