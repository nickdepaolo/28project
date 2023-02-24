import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import { Link } from "react-router-dom";


const CalendarPage = (props) => {
    const [value, setValue] = useState("");
    const today = new Date()

    
    useEffect(() => {
        value > "" && console.log(value)
    },[value]) 


    return(
      <div>
        <h3>Calender Page</h3>
        <br/>
        <Calendar activeStartDate={today} onChange={setValue}/>
        <button type="button"><Link to='/'>Home</Link></button>
      
      </div>
    );
    
}
    export default CalendarPage;