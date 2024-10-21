import React from 'react';
import Header from './Header';

const Terms = () => {
    return (

        <>
            <Header />

        <div className="terms-container">
            <h1>Allmänna villkor</h1>
            
            <p><strong>FÖLJANDE VILLKOR ("ANVÄNDARVILLKOREN") REGELERAR DIN ANVÄNDNING AV PURESIP'S TJÄNSTER</strong></p>
            <p>PureSip, med adress Trekantsvägen 1, 117 43 Stockholm, ("PureSip", "vi" eller "oss") tillhandahåller Tjänsterna enligt beskrivningen nedan. Genom att använda Tjänsterna godkänner du Användarvillkoren.</p>
            
            <h2>TJÄNSTERNA</h2>
            <p>PureSips tjänster består av webbplatsen www.puresip.com (”Webbplatsen”) och PureSips nyhetsutskick via SMS och e-post (gemensamt ”Tjänsterna”). Om du inte längre vill få nyhetsutskicken kan du avregistrera dig genom instruktionerna i varje SMS och e-post. PureSips mål är att tillhandahålla kvalitativ information om alkoholfria drycker samt närliggande produkter och tjänster.</p>
            
            <h2>PERSONUPPGIFTSHANTERING</h2>
            <p>I vår Integritetspolicy hittar du information om hur vi behandlar dina personuppgifter och skyddar din integritet när du använder våra tjänster. Du kan läsa vår Integritetspolicy på www.puresip.com/privacy.</p>
            
            <h2>ÅLDERSGRÄNS</h2>
            <p>Du måste ha fyllt 18 år för att använda Tjänsterna.</p>
            
            <h2>ANVÄNDNING AV TJÄNSTERNA</h2>
            <p>Tjänsterna får endast användas för icke-kommersiellt bruk. Du får inte använda Tjänsterna på ett sätt som kan orsaka olägenheter eller skada för PureSip eller andra användare. Du måste följa svensk lag och dessa Användarvillkor.</p>

            {/* Resterande innehåll... */}

            <h2>KONTAKT</h2>
            <p className="contact-info">
                E-post: info@iths.se<br />
                Telefon: 08-557 683 53<br />
                Adress: Trekantsvägen 1, 117 43 Stockholm
            </p>
        </div>

        </>
    );
};

export default Terms;


