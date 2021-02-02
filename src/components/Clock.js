function Clock() {
    let dateObj = new Date();
    let date = dateObj.getDay() + "/" + dateObj.getMonth() + "/" + dateObj.getFullYear();
    let time = dateObj.getHours() + ":" + dateObj.getMinutes() + ":" + dateObj.getSeconds();

    return(
    <div className="clock-container">
        <h1>{date} </h1>
        <h2>{time}</h2>
    </div>
    )
}   

export default Clock;
