import {ReactComponent as Back} from '../assets/left.svg';
import {ReactComponent as External} from '../assets/external-link.svg';
import {ReactComponent as Favorite} from '../assets/favorite.svg';
export default function EventDetailsHeader() {
    return (
        <header className="event-header">
            <div className='event-header-btns'>
                <Back/>
                <div className='event-header-btns-right'>
                    <External/>
                    <Favorite/>
                </div>
            </div>
        </header>
    );
}