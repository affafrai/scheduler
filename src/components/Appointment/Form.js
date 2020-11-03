
import React, {useState} from "react";
import Button from "components/Button"
import InterviewerList from "components/InterviewerList"


export default function Form(props) {
  const [interviewer, setInterviewer] = useState(props.interviewer || null)

  const [name, setName] = useState(props.name || "");

  const reset = () => {
    setName("")
    setInterviewer(null)
  }

  const save = () => {
    props.onSave(name, interviewer)
  }
  const changeName = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }
  const cancel = () => {
    props.onCancel();
    reset();
  }
  return(
    <main className="appointment__card appointment__card--create">
      {  console.log(name,interviewer)
}
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={changeName}
          />
        </form >
        <InterviewerList interviewers={props.interviewers} interviewer={interviewer} onChange={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={save}>Save</Button>
        </section>
      </section>
    </main>

  )
}