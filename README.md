
Nedan listat är kraven för uppgiften samt vilka komponenter som berör dessa. I varje komponent finns dokumentation om hur de fungerar.


Startsida (med vissa grundläggande krav) 


    (4.1) Startsidan ska innehålla en lista med alla recept som ligger i databasen 
        - apiCalls.js, HomePage.jsx, MainContainer.jsx, PreviewCard.jsx

    (4.1) Varje recept som listas på startsidan ska visa upp 

    relevant information om receptet, som namn, bild, rating, ingredienser och tid 
        - PreviewCard.jsx, PrepTime.jsx, Difficulty.jsx, StarRating.jsx

 

    (4.1) Startsidan ska ha en lista som visar alla kategorier 
        - Header.jsx, SelectMenu.jsx

    (4.1) Startsidan ska ha en sökruta 
        - Header.jsx

 

Kategorisida 

    (4.2) Kategorisidan har samma design som startsidan men listar bara recept i vald kategori  
        - apiCalls.js, HomePage.jsx, MainContainer.jsx, PreviewCard.jsx

    (4.2) I kategorilistan ska vald kategori vara markerad med t.ex. fet text 
        - Header.jsx, SelectMenu.jsx
 

Receptsida 

        - RecipePage.jsx, Recipe.jsx

    (5.1) Receptsidan ska minst  

    visa tid,ingredienser och svårighetsgrad 
        - PrepTime.jsx, Difficulty.jsx, StarRating.jsx, Ingredients.jsx
 

    (5.1) Receptsidan ska ha en lista över alla ingredienser 
        - Ingredients.jsx

    (5.1) Receptsidan ska ha en sektion som visar alla instruktioner (Gör så här) 
        - Recipe.jsx

    (5.1) Receptsidan ska ha en komponent där besökaren kan rösta på receptet genom att klicka på en av fem stjärnor 

    När man klickar på en stjärna skickas rösten in direkt 

    Efter att rösten skickats in ska det stå "Tack för ditt betyg!" istället för stjärnorna  

        - Recipe.jsx, StarRating.jsx, AddStarRating.jsx

 

Kommentarsfunktion 

    - Comments.jsx, AddComment.jsx, CommentList.jsx

    (5.2) Användaren ska kunna posta en kommentar genom att  

    Fylla i en kommentar 

    Fylla i sitt namn 

    Klicka på skicka 
 

    (5.2) Om inte alla fält fyllts i ska tydliga valideringsmeddelanden visas upp för användaren och ingenting skickas iväg  

    (5.2) Under tiden kommentaren skickas ska fälten vara disablade så att man inte kan skicka dubbelt av misstag 

    (5.2) När kommentaren har skickats ska formuläret ersättas med texten "Tack för din kommentar!"  

    (5.2) Kommentarer som andra postat sedan tidigare ska visas upp i en lista och för varje kommentar ska visas 


Övriga funktioner

    Routing sker i App.jsx

    About, Privacy och Terms. Ger viktig info om hemsidan. Nås via länkar i footer.
        - Footer.jsx, About.jsx, Privacy.jsx, Terms.jsx

    CategoryArticles ger info om de olika kategorierna. samt agerar som länk till respektive kategorisida.
        - CategoryArticles.jsx

    ErrorPage för att få kontroll på vad som visas om något går fel.
        - ErrorPage.jsx

    InfoBanner finns för dekorativa syften.
        - InfoBanner.jsx

    Loading ger känslan av att man både är kvar på hemsidan och att något faktisk händer när det laddar.
        - loading.jsx



In allDrinks.json are all the drinks in the api-database at the time of finishing this assignment. This file is a back up in case the api is taken down.
