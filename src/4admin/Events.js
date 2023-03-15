
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];




function Events() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        
        for (let i=0; i<allEvents.length; i++){

            const d1 = new Date (allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
      /*
          console.log(d1 <= d2);
          console.log(d2 <= d3);
          console.log(d1 <= d4);
          console.log(d4 <= d3);
            */

             if (
              ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                (d4 <= d3) )
              )
            {   
                alert("Save"); 
                break;
             }
    
        }
        
        
        setAllEvents([...allEvents, newEvent]);
    }
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    function togglePopup() {
       
        setIsPopupVisible(!isPopupVisible);
      }
      
    function handleDeleteEvent(index) {
      const updatedEvents = [...allEvents];
      updatedEvents.splice(index, 1);
      setAllEvents(updatedEvents);
  }

  function handleEditEvent(index) {
      setNewEvent(allEvents[index]);
      const updatedEvents = [...allEvents];
      updatedEvents.splice(index, 1);
      setAllEvents(updatedEvents);
  }
  
  

    return (
        <div className="App">
            <h1 style={{paddingLeft:"45%"}}>Calendar</h1>

            <div>
            <div>
  <button className="secondary commonbutton lighttext" onClick={togglePopup}>
    {isPopupVisible ? "Close" : "Add Event"}
  </button>

  <div className="modal-overlay" style={{ display: isPopupVisible ? "block" : "none" }}>
    <div className="modal1">
      <h2 className="Addd">Add New Event</h2>

      <div className="row">
<<<<<<< HEAD
        <div className="inputss col-lg-4" style={{height:"10"}}>
=======
        <div className="inputss">
>>>>>>> d45d215c84dd23a43639ac11f0cb36aea0ff1df8
        <input type="text" className='textttt commontextbox primaryborder ' placeholder="Add Title" style={{ marginRight: "5px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
        </div>
        <div className="inputss  col-lg-4" style={{height:"10"}}>
        <DatePicker className='texttt1 commontextbox primaryborder' placeholderText="Start Date" style={{ marginLeft: "5px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
      
        </div>
        <div className="inputss col-lg-4"style={{height:"10"}}>
        <DatePicker className='texttt2  commontextbox primaryborder' placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
        </div>

        <div className="buttons">
        <button className="Btn-adds secondary commonbutton lighttext" onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
      </div>


    
    </div>
  </div>

<<<<<<< HEAD
  <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 250, margin: "50px", fontSize: "14px" }} />
=======
  <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 300, margin: "10px", fontSize: "14px"}} />
>>>>>>> d45d215c84dd23a43639ac11f0cb36aea0ff1df8
  <div style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
    {allEvents.map((event, index) => (
      <div style={{ display: "flex", flexDirection: "column", marginRight: "20px", fontSize: "12px" }} key={index}>
        <div>{event.title}</div>
        <div>{event.start.toString()}</div>
        <div>{event.end.toString()}</div>
        <button className='Handlee secondary commonbutton lighttext ' onClick={() => handleDeleteEvent(index)}>Delete</button>
        <button className='Handlee1 secondary commonbutton lighttext' onClick={() => handleEditEvent(index)}>Edit</button>
      </div>
    ))}
  </div>
</div>
</div>
        </div>
    );
}

export default Events;


