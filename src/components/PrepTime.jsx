export default function PrepTime({ dish }) {
    return (<div className="prep-time">
        <i className="fa clock">&#xf017;</i>
        <p className="time">{dish.timeInMins} min</p>
    </div>);
}