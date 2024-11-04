
export default function Difficulty({time}) {

    var level = "Medel";

    var graphLevel = <div className="graph-level"><div></div><div></div><div></div></div>;

    if (time < 5) {
        level = "Lätt";
        graphLevel = <div className="graph-level"><div className="level-easy"></div><div></div><div></div></div>;
    } else if (time > 7) {
        level = "Svår";
        graphLevel = <div className="graph-level"><div className="level-hard"></div><div className="level-hard"></div><div className="level-hard"></div></div>;
    } else {
        graphLevel = <div className="graph-level"><div className="level-medium"></div><div className="level-medium"></div><div></div></div>;
    }

    return <>{graphLevel}<p className="difficulty">{level}</p></>
}