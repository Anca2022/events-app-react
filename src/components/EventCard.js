export default function EventCard({event:{image, title, description}}){
    return (
        <article className='event-card'>
            <div className='event-image'>
                <img src={image} alt='event.title'></img>
            </div>
            <h6>{title}</h6>
            <p>{description}</p>
            <p className='more'>View more</p>
        </article>
    )
}