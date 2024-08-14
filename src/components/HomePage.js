import './css/HomepageCss.css'
import Header from './Header';
import MainSection from './MainSection';
import FooterNav from './FooterNav';
export default function HomePage() {
    return (
        <div className='homepage'>
            <Header />
            <MainSection />
            <FooterNav />
        </div>
    );
}