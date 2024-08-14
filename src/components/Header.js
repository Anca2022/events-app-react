
import {ReactComponent as Hamburger } from '../assets/hamburger-menu.svg';
import {ReactComponent as Bell} from '../assets/bell-pin.svg';
import {ReactComponent as Search} from '../assets/search-light.svg';
export default function Header() {
    return (
        <header>
            <nav>
                <Hamburger/>
                <span>Eventopia</span>
                <Bell/> 
            </nav>
            <div className='input-div'>
                <Search/>
                <input type='text' placeholder='Search...'></input>
            </div>
        </header>
    );
}