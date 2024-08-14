export default function TopEventCard({event:{title, image}}){
    return(
        <article className="top-event-card">
            <div className='top-events-image'>
                <img src={image} alt={title}></img>
            </div>
            <p>{title}</p>
        </article> 
    )
};