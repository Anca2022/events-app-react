export default function UpcomingEventCard({event:{title, image, date}}){
    return (
        <article className="upcoming-event-card">
            <div className='upcoming-image'>
                <img src={image} alt={title}></img>
            </div>
            <div className='upcoming-info'>
                <p className='upcoming-title'>{title}</p>
                <p>{date}</p>
            </div>
        </article>
    )
}