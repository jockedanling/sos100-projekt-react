/*
Denna komponent visar enskild notifikation som ett kort.
Den tar emot notifikations objekt och en onMarkAsRead-funktion som props
*/
import '../styles/NotificationCard.css';

//Översätter API-type till svenska
function formatNotificationType(type) {
    const typeLabels = {
        LoanDueReminder:'Påminnelse',
        OverDueNotice: 'Försenad',
        ReservationReady: 'Reservation klar',
        LoanConfirmation: 'Lån Bekräftat',
        ReturnConfirmation: 'Återlämnad',
    };
    return typeLabels[type] || type;
}

//Formaterar datum till standard svensk datum- och tidsformat
function formatDate(dateString) {
    return new Date(dateString).toLocaleString('sv-SE',{
        year:'numeric',
        month:'short',
        day: 'numeric',
        hour:'2-digit',
        minute: '2-digit',
    });
}

function NotificationCard({notification, onMarkAsRead}) {
    const {id, title, message, isRead, createdAt, template} = notification;

    return (
        <article className={`notification-card ${!isRead ? 'notification-card--unread' :''}`}> {/* Lägger till CSS-klass dynamiskt om notifikationen är oläst */}
            <div className='notification-card__header'>
                {/* Typbadge från template */}
                {template && (
                    <span className='notification-card__type'>
                        {formatNotificationType(template.type)}
                    </span>
                )}
                {!isRead && <span className='notification-card__dot'/>}
            </div>

            <h3 className='notification-card__title'>{title}</h3>
            <p className='notification-card__message'>{message}</p>

            <div className='notification-card__footer'>
                <time className='notification-card__date'>{formatDate(createdAt)}</time>
            </div>
        </article>
    );
}
export default NotificationCard;