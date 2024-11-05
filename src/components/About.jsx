import React from 'react';
import Header from './Header'; // Import the Header component to be used on the page

const About = () => {
    return (

        <>
            <Header /> // Include the Header component at the top of the page

        <div className="about-container">
            <h1>Om PureSip</h1>
            <p>PureSip är den självklara platsen för alla hemmabartenders, såväl nybörjare som mer erfarna. Vi vill ge dig grundläggande insikter i hur man blandar riktigt bra och goda drinkar och cocktails så att du kan utveckla din inneboende bartender.</p>

            <p>Här kommer du att få ta del av ett brett utbud av drinkrecept. Förutom vår stora receptsamling hittar du oss även på Facebook och Instagram.</p>

            <p>PureSip är en ledande plattform för alkoholfria drycker. Hit vänder sig tusentals dryckesentusiaster varje vecka för att upptäcka och njuta av det senaste inom världen av uppfriskande och smakrika alkoholfria alternativ. Välkommen till PureSip, där du kan utforska drycker för alla tillfällen – helt utan alkohol.</p>

            <p>Välkommen!</p>
        </div>
</>

    );
};

export default About; // Export the About component
