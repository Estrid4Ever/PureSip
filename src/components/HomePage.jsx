import { useState, useEffect } from "react";
import { fetchAllRecipes } from '../apiCalls';
import { useParams } from "react-router-dom";
import Header from './Header';
import InfoBanner from "./InfoBanner";
import MainContainer from "./MainContainer";
import PreviewCard from './PreviewCard';

export default function HomePage() {
    const [recipes, setRecipes] = useState([]);  
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);  
    const [searchTerm, setSearchTerm] = useState("");  
    const [selectedCategory, setSelectedCategory] = useState("");  
    const { categoryId, searchId } = useParams();

    
    const exampleDifficultDrinks = [
        {
            id: 1,
            title: "Blueberry Cooler",
            difficulty: "Svår",
            imageUrl: "src/assets/images/Bluerry cooler.jpg",
            description: "Blueberry Cooler är en underbart fräsch mocktail som kombinerar de söta, naturliga smakerna av färska blåbär med en syrlig touch av citron. Den är lätt att göra och ger en explosion av bärsmak i varje klunk. Perfekt för både fest och vardag när du vill njuta av något läskande utan alkohol, men ändå få den friska känslan av en bärig drink.",
            categories: ["mocktails"],
            time: 7
        },
        {
            id: 2,
            title: "Golden Milk (Gurkmejalatte)",
            difficulty: "Svår",
            imageUrl: "src/assets/images/Golden Milk - Gurkmejalatte.jpg",
            description: "Golden Milk är en populär hälso- och wellness-dryck som kombinerar gurkmeja med mandelmjölk och kryddor för att skapa en antiinflammatorisk, näringsrik och värmande dryck. Perfekt som ett hälsosamt kvällsmål eller för att värma dig under kalla dagar. Gurkmeja har lång historia inom traditionell medicin och är full av antioxidanter.",
            categories: ["varma-drycker"],
            time: 10
        },
        {
            id: 3,
            title: "Varm Choklad med Havremjölk",
            difficulty: "Svår",
            imageUrl: "src/assets/images/Varm choklad med havremjölk.jpg",
            description: "En krämig och laktosfri varm choklad gjord med havremjölk. Denna variant är både len och fyllig i smaken, perfekt för kalla vinterkvällar eller som en mysig dryck till frukost. Med mörk choklad och en hint av vanilj är den en dröm för chokladälskare som vill ha något lite nyttigare.",
            categories: ["varma-drycker"],
            time: 8
        },
        {
            id: 4,
            title: "Chai Latte",
            difficulty: "Svår",
            imageUrl: "src/assets/images/Chai Latte.jpg",
            description: "Chai Latte är en värmande och kryddig dryck som kombinerar svart te med aromatiska kryddor som kanel, kardemumma och ingefära. Perfekt för kalla dagar eller som en mysig avslutning på dagen. Med en touch av honung och skummad mjölk blir det en balanserad och smakrik dryck som älskas av många.",
            categories: ["varma-drycker"],
            time: 9
        }
    ];

    const exampleMediumDrinks = [
        {
            id: 10,
            title: "Virgin Mojito",
            difficulty: "Medel",
            imageUrl: "src/assets/images/Virgin Mojito.jpg",
            description: "Virgin Mojito är en fräsch och uppfriskande alkoholfri drink som tar det bästa från den klassiska mojiton och gör den tillgänglig för alla. Den är fylld med färsk mynta och limejuice, vilket ger en härligt syrlig och svalkande smak som påminner om varma sommardagar. Perfekt för de som vill ha en lätt och läskande dryck utan alkohol, men ändå få den välkända mojito-upplevelsen.",
            categories: ["mocktails"],
            time: 4
        },
        {
            id: 11,
            title: "Pineapple Fizz",
            difficulty: "Medel",
            imageUrl: "src/assets/images/Pineapple Fizz mocktail.jpg",
            description: "Pineapple Fizz är en tropisk och uppfriskande mocktail som blandar den söta smaken av ananas med den syrliga tonen från citron. Den är perfekt för varma dagar när du vill ha något svalkande och fräscht, men ändå lätt och alkoholfritt. Med enkel tillagning och en färgglad presentation är det här en drink som kommer att imponera på alla dina gäster.",
            categories: ["mocktails"],
            time: 5
        },
        {
            id: 12,
            title: "Green Detox Smoothie",
            difficulty: "Medel",
            imageUrl: "src/assets/images/Green Detox Smoothie.jpg",
            description: "Denna gröna detox-smoothie är fylld med nyttigheter från spenat, avokado och äpple. Den är perfekt för dig som vill starta dagen med en boost av vitaminer och antioxidanter. Den lena och friska smaken gör den till en favorit för både hälsoentusiaster och de som vill ha något mättande utan att tumma på smaken.",
            categories: ["smoothies"],
            time: 4
        },
        {
            id: 13,
            title: "Mango Passion Smoothie",
            difficulty: "Medel",
            imageUrl: "src/assets/images/Mango Passion Smoothie.jpg",
            description: "Mango Passion Smoothie är en tropisk dröm som kombinerar den söta smaken av mogen mango med den fräscha syran från passionsfrukt. Perfekt som ett exotiskt mellanmål eller frukost, den här smoothien ger både en smakupplevelse och ett vitaminrikt tillskott till din dag.",
            categories: ["smoothies"],
            time: 5
        },
        {
            id: 14,
            title: "Grön Smoothie Bowl",
            difficulty: "Medel",
            imageUrl: "src/assets/images/Grön Smoothie Bowl.jpg",
            description: "En grön smoothie bowl fylld med näringsrika ingredienser som spenat, avokado och chiafrön. Den här frukosten eller mellanmålet är packat med vitaminer, mineraler och fiber för att ge en energiboost och hjälpa dig att hålla dig mätt längre. Toppa med dina favorittillbehör för extra crunch och smak.",
            categories: ["Hälsodrycker"],
            time: 5
        },
        {
            id: 15,
            title: "Spirulina Boost",
            difficulty: "Medel",
            imageUrl: "src/assets/images/Spirulina Boost.jpg",
            description: "Spirulina Boost är en kraftfull hälsodryck som blandar spirulinapulver med färsk apelsinjuice och grönt te för att skapa en näringsrik energiboost. Spirulina är rikt på protein, vitaminer och mineraler och anses vara ett superfood som hjälper till att stärka immunförsvaret och förbättra kroppens återhämtning.",
            categories: ["smoothies"],
            time: 5
        },
        {
            id: 16,
            title: "Pepparmints-Te",
            difficulty: "Medel",
            imageUrl: "Pepparmints-te är en uppfriskande och lugnande varm dryck som är perfekt för att stilla magen eller njuta av en stunds avkoppling. Med sin friska och milda smak är den ett utmärkt val för kvällarna eller när som helst på dagen. Pepparmynta har länge använts för sina hälsosamma egenskaper och är känt för att hjälpa till att lindra matsmältningsproblem.",
            description: "En lugnande te med pepparmint.",
            categories: ["te"],
            time: 4
        },
        {
            id: 17,
            title: "Vattenmelon- och Limejuice",
            difficulty: "Medel",
            imageUrl: "src/assets/images/Vattenmelon- och limejuice.jpg",
            description: "Vattenmelon- och limejuice är den perfekta drycken för varma sommardagar. Den saftiga vattenmelonen ger en naturligt söt smak som balanseras av den syrliga limen. Detta är en uppfriskande och lätt dryck som både hydratiserar och ger dig en härlig smakupplevelse. Perfekt för picknicken eller som ett uppfriskande mellanmål.",
            categories: ["juices"],
            time: 5
        }
    ];

    const exampleEasyDrinks = [
        {
            id: 9,
            title: "Strawberry Banana Smoothie",
            difficulty: "Lätt",
            imageUrl: "src/assets/images/Strawberry Banana Smoothie.jpg",
            description: "Denna klassiska smoothie kombinerar den söta smaken av färska jordgubbar med den krämiga konsistensen av banan. Det är en näringsrik och uppfriskande dryck som är perfekt till frukost eller som mellanmål. Med en bas av yoghurt och honung är den både mättande och energigivande, och passar perfekt för hela familjen.",
            categories: ["Smoothies"],
            time: 3
        }
    ];

    useEffect(() => {
        fetchAllRecipes()
            .then((data) => {
                if (data) {
                    setRecipes(data); 
                } else {
                    setError("No data available");
                }
            })
            .catch(() => {
                setError("Failed to fetch recipes");
            })
            .finally(() => {
                setLoading(false);
            });

        if (categoryId) {
            setSelectedCategory(categoryId);
        } else {
            setSelectedCategory("Kategorier");
        }

        if (searchId) {
            setSearchTerm(searchId);
            setSelectedCategory("Kategorier");
        } else {
            setSearchTerm("");
        }

    }, [categoryId, searchId]);

    if (loading) {
        return <p>Loading...</p>;  
    }

    if (error) {
        return <p>{error}</p>;  
    }

    const filteredRecipes = recipes.filter(recipe =>
        (selectedCategory === "Kategorier" || recipe.categories.includes(selectedCategory.toLowerCase())) &&  
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())  
    );

    return (
        <>
            <Header
                setSearchTerm={setSearchTerm}
                recipes={recipes} 
            />

            <InfoBanner />
            <PreviewCard recipes={filteredRecipes} />  

            
            <h2>Svår</h2>
            {exampleDifficultDrinks.length > 0 ? (
                <PreviewCard recipes={exampleDifficultDrinks} />
            ) : (
                <p>Inga svåra drinkar tillgängliga.</p>
            )}

            
            <h2>Medel</h2>
            {exampleMediumDrinks.length > 0 ? (
                <PreviewCard recipes={exampleMediumDrinks} />
            ) : (
                <p>Inga medelsvåra drinkar tillgängliga.</p>
            )}

            
            <h2>Lätt</h2>
            {exampleEasyDrinks.length > 0 ? (
                <PreviewCard recipes={exampleEasyDrinks} />
            ) : (
                <p>Inga lätta drinkar tillgängliga.</p>
            )}

            
            <MainContainer 
                recipes={recipes} 
                filteredRecipes={filteredRecipes}
                selectedCategory={selectedCategory}
                searchTerm={searchTerm}
            />
        </>
    );
}



