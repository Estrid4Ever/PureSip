export default function PrepTime({ dish }) {
    // Component that displays the preparation time of a dish using an icon and time in minutes
    return (<div className="prep-time">
        <i className="fa clock">&#xf017;</i>
        <p className="time">{dish.timeInMins} min</p>
    </div>);
}