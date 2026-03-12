/*
Komponenten tar emot hela listan av notifikationer och renderar ett NotificationCard per notifikation.
Visar även en sammanfattning med antal och antal olästa.
*/
import NotificationCard from "./NotificationCard";
import '../styles/NotificationList.css';

function NotificationList({notifications, onMarkAsRead}) {
    const unreadCount = notifications.filter((n) => !n.isRead).length; /* Räknar olästa */

    return (
        <section className="notification-list">
            {/* Sammanfattningsrad */}
            <div className="notification-list__summary">
                <span>{notifications.length} notifikationer </span>
                {unreadCount > 0 && (<span className="notification-list__unread-count">
                    {unreadCount} olästa
                </span>
                )}
            </div>

            {/* Lista av kort */}
            <div className="notification-list__items">
                {notifications.map((notification) => ( /* loopar igenom listan och skapar ett kort per notifikation */
                    <NotificationCard
                    key={notification.id} /* Unik key vid rendering av listor */
                    notification={notification}
                onMarkAsRead={onMarkAsRead} />
            ))}
            </div>
        </section>
    );
}

export default NotificationList;