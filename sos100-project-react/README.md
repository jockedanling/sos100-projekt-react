# NotificationSearcher
En webbapplikation för att söka och visa notifikationer kopplat till användare i bibliotek.
Hämtar data från NotificationService API via ett användar-ID.

## Hur man kör

1. Installera:
    npm install

1,5. Rätt fil i terminalen (eventuell):
    
    Säkerställ att terminalen är i rätt fil:
    
    sos100-project-react
    
    Om inte: cd sos100-project-react
   
    korrekt filväg för att kunna starta:
   
    sos100-projekt-react/sos100-project-react

2. Starta utvecklingsservern:
    npm run dev

3. Öppna http://localhost:5173 i webbläsaren.
    (CORS i API:et tillåter endast denna port)

### Koppling mot API
API-adressen är konfigurerad i src/api/notificationApi.js via variabeln BASE_URL. 

NotificationService har ett scalar UI för att utforska endpoints:
https://notification-service-t9.azurewebsites.net/scalar/v1

## AI-användning
AI har använts för hjälp med css-design och layout baserat på figma-utkast. 
AI har även använts för att debugga syntax fel och förklara problem. 
Förslag på filstruktur.

### Modifiering av AI-genererat material
Färger och designval har justerats manuellt efter eget tycke.

## Annat
Projektstrukturen är src och sedan /api, /components, /hooks, /styles/ för att ha organiserad struktur på all kod.
Vite har använts som byggverktyg.
Inga externa CSS-ramverk har använts, bara vanlig CSS med variabler. 
Applikationen använder endast en GET-endpoint från API:et.

