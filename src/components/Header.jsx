import SelectMenu from './SelectMenu';

export default function Header() {

    const cardData = [
        {
            id: 1,
            title: "Big Appleberry drink",
            description: "Festlig drink för den som älskar frukt och bär",
            ratings: [4, 3, 4, 4, 3, 5],
            imageUrl: "../src/assets/images/BigAppleberry-500x650___media_library_original_500_650.jpg",
            timeInMins: 4,
            categories: ["frukt", "bär", "is"],
            instructions: ["Häll all frukt i en shaker och mortla.",
                "Tillsätt sedan konjak, pressad äpplejuice och sockerlag.",
                "Skaka ordentligt så att frukt och konjak blandas väl.",
                "Sila över i ett slingglas fyllt med iskuber.",
                "Garnera med ett hallon och ett björnbär."],
            price: 110,
            ingredients: [
                {
                    name: "cognac",
                    amount: 5,
                    unit: "cl"
                },
                {
                    name: "röda vinbär",
                    amount: 6,
                    unit: "st"
                },
                {
                    name: "gröna kärnfria vindruvor",
                    amount: 3,
                    unit: "st"
                },
                {
                    name: "björnbär",
                    amount: 2,
                    unit: "cl"
                },
                {
                    name: "sockerlag",
                    amount: 2,
                    unit: "cl"
                },
                {
                    name: "is",
                    amount: 0,
                    unit: ""
                },
                {
                    name: "färska hallon",
                    amount: 0,
                    unit: ""
                },
                {
                    name: "färska björnbär",
                    amount: 0,
                    unit: ""
                },
            ]
        },
        {
            id: 2,
            title: "Orange Aperol drink",
            description: "En klassisk drink med bitter smak",
            ratings: [4, 3, 2, 3, 3, 2, 3, 2, 2],
            imageUrl: "../src/assets/images/CG-(500-×-650-px)-(25)___media_library_original_500_650.jpg",
            timeInMins: 2,
            categories: ["frukt", "lyx", "is"],
            instructions: ["Häll samtliga ingredienser i ett glas med is.",
                "Garnera med en apelsinskiva.",
                "Servera och njut.",
            ],
            price: 95,
            ingredients: [
                {
                    name: "aperol eller annan italiensk aperitif ",
                    amount: 4 - 6,
                    unit: "cl"
                },
                {
                    name: "Fanta eller annan apelsinläsk ",
                    amount: 0,
                    unit: ""
                },
                {
                    name: "apelsin",
                    amount: 1,
                    unit: "skiva"
                },
                {
                    name: "is",
                    amount: 0,
                    unit: ""
                },
            ]
        },
        {
            id: 3,
            title: "Shirley Temple drink",
            description: "Alkoholfri drink som dracks av skådespelerskan Shirley Temple när hon gick på filmpremiärer som barn. Ginger ale, grenadine och lime anger smaktonen.",
            ratings: [1, 2, 1, 3, 2, 1, 0, 0, 0, 0, 0],
            imageUrl: "../src/assets/images/CG-(500-×-650-px)---2024-02-13T152925.305___media_library_original_500_650.jpg",
            timeInMins: 2,
            categories: ["frukt", "lyx", "is"],
            instructions: [
                "Fyll ett highball-glas med is.",
                "Häll i grenadine och limejuice.",
                "Toppa med ginger ale och rör runt försiktigt.",
                "Garnera med ett körsbär på kanten av glaset.",

            ],
            price: 105,
            ingredients: [
                {
                    name: "grenadine",
                    amount: 15,
                    unit: "ml"
                },
                {
                    name: "limejuice",
                    amount: 25,
                    unit: "ml"
                },
                {
                    name: "ginger ale",
                    amount: 150,
                    unit: "ml"
                },
                {
                    name: "maraschinokörsbär till garnering",
                    amount: 1,
                    unit: "st"
                },
                {
                    name: "is",
                    amount: 0,
                    unit: ""
                },
            ]
        },

    ];


    return <>
        <header>
            <h1 className="header-title">PureSip</h1>
            <div className="search-categories">

                <SelectMenu recepies={cardData} />
                <div className='search-container'>
                    <input className="searchbar" type="text" name="search" placeholder="Sök..." />
                    <span className="searchbar-icon"><i className="fas fa-search"></i></span>
                </div>
            </div>
        </header>
    </>;
}