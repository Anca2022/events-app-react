import { useState } from 'react';
import Tab from './Tab';

export default function FooterNav() {
    const [selected,setSelected]=useState('home');
    const tabs = ['home', 'favorite', 'map', 'messages']; 
    return (
        <footer className="footer-nav">
           <ul>
            {
                tabs.map(tab => <Tab 
                    key={tab} 
                    name={tab}
                    activeTab={selected}
                    setSelected={setSelected}
                />)
            }
           </ul>
        </footer>
    );
}