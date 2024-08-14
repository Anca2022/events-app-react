import Categories from './Categories';
import Upcoming from './Upcoming';
import TopEvents from './TopEvents';

export default function MainSection() {
    function toTitleCase(phrase){
        let words = phrase.split(' ');
        let newName = words
            .map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
            .join(' ');
        return newName;
    }
    return (
        <main className='main-section'>
            <Categories toTitleCase={toTitleCase}/>
            <Upcoming toTitleCase={toTitleCase}/>
            <TopEvents toTitleCase={toTitleCase}/>
        </main>
    );
}