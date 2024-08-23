import EventDetailsHeader from "./EventDetailsHeader";
import EventDetailsContent from "./EventDetailsContent";
import './css/EventsCss.css'
export default function EventDetails() {
    return (
        <div className="event-page">
            <EventDetailsHeader/>
            <EventDetailsContent />
        </div>
    );
}