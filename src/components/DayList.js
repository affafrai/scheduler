import React from "react";
import DayListItem from "components/DayListItem"


export default function DayList(props) {
  const days = props.days;
  const returnDays = days.map((day) => {
    const {id,name,spots} = day
    const isSelected = name === props.day;
    const noSpots = spots === 0 ;
    return( 
      <DayListItem 
        key={id}
        name={name} 
        spots={spots} 
        selected={isSelected}
        full={noSpots}
        setDay={props.setDay}  
      />
    )
  })

 return returnDays;

}
