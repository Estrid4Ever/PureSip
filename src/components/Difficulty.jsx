
export default function Difficulty({time}) {

    // Default difficulty level
    var level = "Medel";

    // Default graphical representation of the difficulty level
    var graphLevel = <div className="graph-level"><div></div><div></div><div></div></div>;

    if (time < 5) {
        // Set difficulty level to "Easy" if time is less than 5 minutes
        level = "Lätt";
        graphLevel = <div className="graph-level"><div className="level-easy"></div><div></div><div></div></div>;

    } else if (time > 7) {
        // Set difficulty level to "Hard" if time is more than 7 minutes
        level = "Svår";
        graphLevel = <div className="graph-level"><div className="level-hard"></div><div className="level-hard"></div><div className="level-hard"></div></div>;

    } else {
        // Update graphical representation for "Medium" difficulty
        graphLevel = <div className="graph-level"><div className="level-medium"></div><div className="level-medium"></div><div></div></div>;
    }

    return <>{graphLevel}<p className="difficulty">{level}</p></>
}