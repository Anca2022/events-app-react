import {ReactComponent as Right} from '../assets/right.svg';
import { topEvents } from '../mockData';
import TopEventCard from './TopEventCard';
export default function TopEvents({toTitleCase}){
    const topEv = topEvents.map(e=>{
        return {...e, title:toTitleCase(e.title)}
    }); 
    return(
        <section className='top-events'>
            <div className="subheader">
                <div>Top Events</div>
                <div>
                    <span>See all</span> 
                    <Right/>
                </div> 
            </div>
            <div className='top-events-container'>
                {topEv.map(event=><TopEventCard key={event.id} event={event}/>)}
            </div>
        </section>
    );
};