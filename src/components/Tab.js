import {ReactComponent as Home } from '../assets/home.svg';
import {ReactComponent as Favorite } from '../assets/favorites.svg';
import {ReactComponent as Map} from '../assets/map-search.svg';
import {ReactComponent as Messages} from '../assets/messages.svg';
import { motion } from 'framer-motion';

export default function Tab({name, activeTab, setSelected}){
    const imageFn = ()=>{
        switch (name) {
        case 'favorite': 
            return <Favorite/>; 
        case 'map':
            return <Map/>;
        case 'messages': 
            return <Messages/>;
        default:
            return <Home/>;
        }
    }

    return(
        <li 
        onClick={()=>setSelected(name)}
        > 
            {name===activeTab?
            <motion.div 
            transition={{
                duration: 0.5,
                ease: 'easeOut',
            }}
            className='clicked'
            layoutId="highlight"
            >
            </motion.div>
            :null
            }            

            <motion.div
            className={name===activeTab? 'footer-btn-clicked':'footer-btn'}
            transition={{
                duration: 0.5,
                ease: 'easeOut',
            }}
            layoutId={name}
            >
                {imageFn()}
            </motion.div>
        </li>
    )
}
