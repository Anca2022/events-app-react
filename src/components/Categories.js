import {ReactComponent as Right} from '../assets/right.svg';
import { categories, currentEvents } from '../mockData';
import { Link } from 'react-router-dom';
import EventCard from './EventCard';
export default function Categories({toTitleCase}){
    const categ = categories; 
    let currentEv = currentEvents.map(e => {
        return {...e, title:toTitleCase(e.title)}
    })
    return(
        <section className='categories'>
            <div className='subheader'> 
                <div>Categories</div>
                <div>
                    <span>See all </span>
                    <Right/>
                </div>
            </div>
            <div className='category-tags'>
                {
                    categ.map(category => <span key={category}>{toTitleCase(category)}</span>)
                }
            </div>
            <div className='current-events-container'>
                {currentEv.map(event=>(
                    <Link to='/event-details' key={event.id}>
                        <EventCard  event={event} />
                    </Link>
                ))}
            </div>
        </section>
    );
};