import React from "react";
import PropTypes from 'prop-types';

import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";



export default function InterviewerList(props) {

  const interviewers = props.interviewers;
  const returnInterviewers = interviewers.map(interviewer => {
    const {id, name, avatar} = interviewer;
    console.log(props.interviewer, interviewer)
    // const isSelected = id === props.interviewer.id;
    const isSelected = id === props.interviewer;

    return (
     
          <InterviewerListItem 
            key={id}
            name={name}
            avatar={avatar}
            selected={isSelected}
            setInterviewer={event => props.onChange(id)}
          />
    );
  });
    return  (
      <section className="interviewers">
        <h4 className="interviewers__header text--light">Interviewer</h4>
        <ul className="interviewers__list" > {returnInterviewers}</ul>
      </section>
      )
}
// Type Checking with Prop Types
InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

