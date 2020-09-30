import React from "react";
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  const interviewers = props.interviewers;
  const returnInterviewers = interviewers.map(interviewer => {
    const {id, name, avatar} = interviewer;
    const isSelected = id === props.interviewer;
    return (
      <section className="interviewers">
        <h4 className="interviewers__header text--light">Interviewer</h4>
          <InterviewerListItem 
            key={id}
            name={name}
            avatar={avatar}
            selected={isSelected}
            setInterviewer={event => props.setInterviewer(id)}
          />
       
      </section>
    );
  });
  return returnInterviewers;
}
