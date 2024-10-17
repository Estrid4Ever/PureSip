export default function PrepTime({ dish }) {
    let difficulty = "";

    // Kontrollera tiden för att bestämma svårighetsgraden
    if (dish.timeInMins <= 3) {
        difficulty = "Lätt";
    } else if (dish.timeInMins >= 4 && dish.timeInMins <= 5) {
        difficulty = "Medel";
    } else {
        difficulty = "Svår";
    }

    return (
        <div className="prep-time">
            <i className="fa clock">&#xf017;</i>
            <p className="time">{dish.timeInMins} min - {difficulty}</p>
        </div>
    );
}
