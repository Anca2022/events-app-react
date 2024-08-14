import { upcomingEvents } from "../mockData";
import UpcomingEventCard from "./UpcomingEventCard";

export default function Upcoming({toTitleCase}){
    const upcomingEv=upcomingEvents.map(e => {
        return {...e, title:toTitleCase(e.title)}
    }); 
    return(
        <section className="upcoming">
           <div className="upcoming-subheader">Upcoming</div>
           <div className='upcoming-events-container'> 
            {
                upcomingEv.map(event=><UpcomingEventCard key={event.id} event={event}/>)
            }
           </div> 
        </section>
    );
};