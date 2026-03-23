import {useState, useCallback, useEffect} from 'react';
import { fetchNotificationsByUser, markNotificationAsRead } from '../api/notificationApi';

// useState - Skapa reaktiva variabler. När de ändras ritas komponenten om
export function useNotifications() {
const [notifications, setNotifications] = useState([]); 
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
const [userId, setUserId] = useState('');

// useCallback - memorerar funktionen så den inte återskapas i onödan vid varje render
const loadNotifications = useCallback(async () => {
    if(!userId.trim()) return;
    setIsLoading(true);
    setError(null);
    //try/catch/finally - hantera fel och ser till att isLoading alltid stängs av
    try {
        const data = await fetchNotificationsByUser(userId.trim());
        setNotifications(data);
    } catch (err) {
        setError(err.message);
    } finally {
        setIsLoading(false);
    }
}, [userId]);

useEffect(() => { // Körs automatiskt varje gång userId ändras
if(!userId.trim()) {
    setNotifications([]);
return;
}
const timer = setTimeout(() => { // SetTimeout väntar 500ms efter att man har slutat skrivit och sedan skickar anropet.
    loadNotifications();
}, 500);
return () => clearTimeout(timer); // Avbryter timeouten om userId ändras igen innan 500ms gått.
}, [userId, loadNotifications]);

//setNotifications + prev - uppdaterar notifikationen lokalt utan att hämta om alla från api:et.
const markAsRead = useCallback(async (notificationId) => {
    try {
        await markNotificationAsRead(notificationId);
        setNotifications((prev) => prev.map((n) => (n.id === notificationId ? {...n, isRead: true }: n))
);
} catch (err) {
    setError(err.message);
}
}, []);
return {notifications, isLoading, error, userId, setUserId, loadNotifications, markAsRead };
}
