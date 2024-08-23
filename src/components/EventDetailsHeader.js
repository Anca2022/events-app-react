import {ReactComponent as Back} from '../assets/left.svg';
import {ReactComponent as External} from '../assets/external-link.svg';
import {ReactComponent as Favorite} from '../assets/favorite.svg';
import { Link } from 'react-router-dom';
export default function EventDetailsHeader() {
    return (
        <header className="event-header">
            <div className='event-header-btns'>
                <Link to='/'><Back/></Link>
                <div className='event-header-btns-right'>
                    <External/>
                    <Favorite/>
                </div>
            </div>
        </header>
    );
}