import {ReactComponent as EventLogo} from '.././assets/euphonic-logo.svg'
import {ReactComponent as EventDate} from '.././assets/date.svg'
import {ReactComponent as EventTime} from '.././assets/time.svg'
import {ReactComponent as EventLocation} from '.././assets/pointers.svg'
export default function Event() {
    return (
        <article className="event-content">
            <div className='event-subheader'>
                <div className='event-organiser'>
                    <EventLogo/>
                    <div>
                        <h3>Euphonic</h3>
                        <p>Organiser</p>
                    </div>
                </div>
                <div className="clear-button">Follow</div>
            </div>
            <div className='event-content-nav'>
                <p>Event info</p>
                <p>Review</p>
                <p>Facility</p>
            </div>
            <div className='horizontal-line'></div>
            <div className='event-content-info'>
                <div className='event-info'> 
                    <div>
                        <EventDate/>
                        <p>July 17, 2024</p>
                    </div>
                    <div>
                        <EventTime/>
                        <p>9:00 PM - 4:00 AM</p>
                    </div>
                    <div>
                        <EventLocation/>
                        <p>New York, Memphis</p>
                    </div>
                </div>
                <div className='event-content-about'>
                    <h4>About</h4>
                    <p>Step back in time and experience the elegance and charm of bygone eras at "Velvet Nights." Enjoy classic cocktails, retro music, and a sophisticated atmosphere in the exclusive ambiance of "The Velvet Room." Get ready for a night to remember, filled with style and nostalgia.</p>
                </div>
                <div className='event-content-interested'>
                    <h5>Interested</h5>
                    <div className='interested-people'>
                        <img src={require('../assets/interested1-mobile.jpg')} alt='person interested in the event' width='40px' height='40px'/>
                        <img src={require('../assets/interested2-mobile.jpg')} alt='person interested in the event' width='40px' height='40px'/>
                        <img src={require('../assets/interested3-mobile.jpg')} alt='person interested in the event' width='40px' height='40px'/>
                        <img src={require('../assets/interested4-mobile.jpg')} alt='person interested in the event' width='40px' height='40px'/>
                    </div>
                </div>
            </div>
            <div className='event-content-btns'>
                <div className='clear-button custom-select'>
                    <select>
                        <option>Select</option>
                        <option>General Admission  20$</option>
                        <option>Stage Area - Left  30$</option>
                        <option>Stage Area Right  30$</option>
                        <option>VIP  50$</option>
                        <option>Front Row Exp. 75$</option>
                    </select>
                </div>
                <div className='clear-button'>Buy ticket</div>                
            </div>
        </article>
    );
}