# NotificationSearcher
Denna applikation kan söka efter notiser som användaren har kopplat till sin userId och API:et den använder är NotificationService. Syftet är att kunna se användarens alla notiser från det interna bibliotekssystemet så det är endast en enkel sökfunktion efter en specifik användares notifikationer som den har fått via det interna bibliotekssystemet. Endast en READ-endpoint som denna applikation anropar. 

## Hur man kör

npm install

npm run dev

localhost:5173 är den porten som API:ets CORS tillåter.


API:et kan nås via denna länk med scalar UI: 
https://notification-service-t9.azurewebsites.net/scalar/v1

Kopplingen till API:et är konfigurerad i src/api/notificationApi.js via variabeln BASE_URL.

## AI-användning
AI har använts för hjälp med css-design och layout baserat på figma-utkast. Färger har justerats efter eget tycke. AI har även använts för att debugga syntax fel och förklara problem. Förslag på filstruktur har AI även använts till.

## Annat
Projektstrukturen är src och sedan /api, /components, /hooks, /styles/ för att ha organiserad struktur på all kod.
Vite har använts som byggverktyg.
Inga externa CSS-ramverk har använts, bara vanlig CSS med variabler. 

