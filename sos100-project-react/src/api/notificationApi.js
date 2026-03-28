// API:ets basadress
const BASE_URL = 'https://notification-service-t9.azurewebsites.net/api';

/* 
Async function - väntar på svar från servern
await fetch - Skickar HTTP-anropet och väntar på svar
if (!response.ok) - om statuskoden är 4xx eller 5xx kastas ett fel
return response.json - Omvandlar JSON-svaret till ett JS-objekt
*/
export async function fetchNotificationsByUser(userId){
    const response = await fetch(`${BASE_URL}/Notifications/user/${userId}`);
    if(!response.ok) {
        throw new Error(`kunde inte hämta notifikationer (${response.status})`);
    }
    return response.json();
}
