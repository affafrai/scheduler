import React from "react";
import "components/InterviewerListItem.scss";
import classnames from "classnames";


export default function InterviewerListItem(props) {

  let interviewerListItemClass = classnames("InterviewerListItem", "interviewers__item",  {
    "interviewers__item--selected": props.selected,
    "interviewers__item--selected-image": props.unselected,
  });

  return (
    <li onClick={()=>props.setInterviewer(props.name)} key={props.id} className={interviewerListItemClass}>
      <img
        className={interviewerListItemClass}
        src={props.avatar}
        alt={props.name}
      />
      {props.name}
    </li>
  )
}